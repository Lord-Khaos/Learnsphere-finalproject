
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
      <div className="container">
        <div className="row">
          {/* Branding Section */}
          <div className="col-md-4 mb-3">
            <h5>LearnSphere</h5>
            <p>Empowering learners with the best online courses.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/course-list" className="footer-link">Courses</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: makindeoluwatumininu58@gmail.com</p>
            <p>Phone: +234 9035 4091 80</p>
            <div className="social-icons">
              <a href="#" className="social-link"><FaFacebookF size={20} /></a>
              <a href="#" className="social-link"><FaTwitter size={20} /></a>
              <a href="#" className="social-link"><FaInstagram size={20} /></a>
              <a href="#" className="social-link"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} LearnSphere. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
