import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import starIcon from "../../assets/star.png"; // Full star icon
import halfStarIcon from "../../assets/half-star.png"; // Half star icon
import Footer from "../../components/students/footer";

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from URL
  const { allCourses, calculateRating } = useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch course data
  useEffect(() => {
    if (allCourses.length > 0) {
      const findCourse = allCourses.find((course) => String(course.id) === id); // Ensure correct comparison
      setCourseData(findCourse || null);
      setLoading(false);
    }
  }, [allCourses, id]); // Depend on allCourses and id

  if (loading) return <Loading />; // Show loading state until data is ready
  if (!courseData) return <h2 className="text-center mt-5">Course not found.</h2>; // Handle missing course

  // Calculate rating only if courseData exists
  const rating = calculateRating(courseData) || 0;
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <h1 style={{textAlign:'center'}}>{courseData.courseTitle}</h1>
          <p style={{textAlign:'center'}}>{courseData.description}</p>

          {/* ⭐ Centered Rating Section */}
          <div className="d-flex justify-content-center mt-3">
            <div className="rating-container text-center">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>{rating.toFixed(1)}</p>
              <div className="stars d-flex justify-content-center">
                {[...Array(fullStars)].map((_, i) => (
                  <img key={`full-${i}`} src={starIcon} alt="Full Star" width="20px" height="20px" />
                ))}
                {hasHalfStar && (
                  <img src={halfStarIcon} alt="Half Star" width="20px" height="20px" />
                )}
                {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                  <img
                    key={`empty-${i}`}
                    src={starIcon}
                    alt="Empty Star"
                    width="20px"
                    height="20px"
                    style={{ opacity: 0.3 }}
                  />
                ))}
              </div>
              <p className="mt-2">
                {courseData.courseratings.length}{" "}
                {courseData.courseratings.length > 1 ? "ratings" : "rating"}
              </p>
            </div>

            
          </div>

          <p className="text-muted text-center">{courseData.educator.name}</p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 d-flex flex-column align-items-center text-center">
          {courseData.image && (
            <img
              src={courseData.image}
              alt="Course Thumbnail"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          <p className="mt-3" style={{ fontSize: "30px", fontWeight: "bold" }}>
            {courseData.enrolledStudents.length}{" "}
            {courseData.enrolledStudents.length > 1
              ? "students are enrolled"
              : "student is enrolled"}
          </p>
        </div>
      </div>

<Footer />
    </div>
  );
};

export default CourseDetails;
