
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta-section py-5 text-center text-white">
      <div className="container">
        <h2 className="mb-3">Ready to Level Up Your Skills?</h2>
        <p className="lead mb-4">
          Join thousands of learners who have transformed their careers with our courses.
        </p>
        <Link to="/course-list" className="btn btn-primary btn-lg shadow-sm">
          Browse Courses
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
