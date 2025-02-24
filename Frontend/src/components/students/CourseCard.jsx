/* eslint-disable react/prop-types */
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import starIcon from "../../assets/star.png"; // Full star icon
import halfStarIcon from "../../assets/half-star.png"; // Half star icon
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext); // Fixed function name

  const rating = calculateRating(course); // Get calculated rating
  const maxStars = 5;
  const fullStars = Math.floor(rating); // Count of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if rating has a half-star

  return (
    <div>
      <div className="card" style={{ width: "18rem", border: "2px solid blue", margin: "1rem" }}>
        <img src={course.image} className="card-img-top" alt="Course Thumbnail" />
        <div className="card-body" style={{ borderBottom: "1px solid blue" }}>
          <h5 className="card-title">{course.courseTitle}</h5>
          <p className="card-text">{course.educator?.name || "Unknown Educator"}</p>

          {/* Rating Section */}
          <div className="rating-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p>{rating.toFixed(1)}</p>
            <div className="stars" style={{ display: "flex" }}>
              {[...Array(fullStars)].map((_, i) => (
                <img key={`full-${i}`} src={starIcon} alt="Full Star" width="16px" height="16px" />
              ))}
              {hasHalfStar && <img src={halfStarIcon} alt="Half Star" width="16px" height="16px" />}
              {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                <img
                  key={`empty-${i}`}
                  src={starIcon}
                  alt="Empty Star"
                  width="16px"
                  height="16px"
                  style={{ opacity: 0.3 }}
                />
              ))}
            </div>
            <p>(22)</p> {/* Assuming 22 reviews, replace dynamically if available */}
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">
            Price: {currency}
            {(course.price - (course.discount * course.price) / 100).toFixed(2)}
          </p>
          <Link to={`/course/${course.id}`} className="btn btn-primary" style={{ width: "100%" }}>
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
