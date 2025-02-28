
import './EducatorFooter.css'; // Import the CSS file for styling

const EducatorFooter = () => {
  return (
    <footer className="educator-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Learnsphere</h5>
            <p>Learnsphere is a platform dedicated to providing quality education and resources for educators and students alike.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Contact Us</h5>
            <p>Email: support@learnsphere.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Learnsphere. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EducatorFooter;