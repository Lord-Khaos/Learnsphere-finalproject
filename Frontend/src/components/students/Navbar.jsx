import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext"; 
const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser(); // Check if the user is signed in
  const {navigate,isEducation} = useContext(AppContext)

  return (
    <nav className={`navbar  border-bottom ${isCourseListPage} ? bg-light`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/public/logo.webp"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
            style={{ marginRight: "10px", fontWeight: "bold" }}
            onClick={() => navigate("/")}
          />
          Learnsphere
        </a>

        {/* Center Text with Line */}
        <div className="d-flex align-items-center">
            {
                isSignedIn && <>
                 <Link to="/my-enrollments" className="text-decoration-none text-dark mx-2">
            My Enrollments
          </Link>
          <span className="mx-2">|</span>
          <Link to="/educator" className="text-decoration-none text-dark mx-2">
           {isEducation ? "Educator Dashboard" : "Become an Educator"}
          </Link>
                </>
            }
         
        </div>

        {/* Show User Button if Signed In, Otherwise Show Create Account Button */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <button className="btn btn-outline-primary" onClick={openSignIn}>
            Create Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
