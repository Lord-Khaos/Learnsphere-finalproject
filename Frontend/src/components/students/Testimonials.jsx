

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "This course completely changed my perspective on coding. The explanations are clear, and the projects are hands-on!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "The best learning experience I've had. The step-by-step guidance helped me build real-world projects!",
  },
  {
    name: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Loved the depth of the content! I now feel confident in my design and coding skills.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div className="card testimonial-card border-0 shadow-sm p-3 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto mb-3"
                />
                <div className="card-body">
                  <p className="text-muted">&ldquo;{testimonial.text}&rdquo;</p>
                  <h5 className="mt-2">{testimonial.name}</h5>
                  <small className="text-primary">{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
