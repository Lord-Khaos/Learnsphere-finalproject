import Footer from "../../components/students/footer";
import Navbar from "../../components/students/Navbar.jsx";
const FAQ = () => {
  return (
    <>
    < Navbar ></Navbar>
    <div className="container mt-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            >
            What is this platform about?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            This platform is designed to help learners access high-quality courses in various subjects.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
          >
            How do I enroll in a course?
          </button>
        </h2>
        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            You can browse courses and click the &ldquo;Enroll&rdquo; button. Once enrolled, you will have access to all lessons.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            >
            Is there a refund policy?
          </button>
        </h2>
        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes, we offer a 7-day refund policy if you are not satisfied with the course.
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
            </>
);
};


export default FAQ