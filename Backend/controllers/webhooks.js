import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const { ["svix-id"]: svixId, ["svix-timestamp"]: svixTimestamp, ["svix-signature"]: svixSignature } = req.headers;

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.create(userData);

        return res.status(200).json({});
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.findByIdAndUpdate(data.id, userData);

        return res.status(200).json({});
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);

        return res.status(200).json({});
      }

      default:
        return res.status(200).json({ message: "Event ignored" });
    }
  } catch (err) {
    console.error("Webhook Error: ", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export default clerkWebhooks;
