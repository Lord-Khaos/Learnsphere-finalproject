import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import starIcon from "../../assets/star.png"; // Full star icon
import halfStarIcon from "../../assets/half-star.png"; // Half star icon
import Footer from "../../components/students/footer";
import humanizeDuration from "humanized-duration";
import Youtube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating, calculateChapterTime, currency, calculateCourseDuration } =
    useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allCourses.length > 0) {
      const findCourse = allCourses.find((course) => String(course.id) === id);
      setCourseData(findCourse || null);
      setLoading(false);
    }
  }, [allCourses, id]);

  if (loading) return <Loading />;
  if (!courseData) return <h2 className="text-center mt-5">Course not found.</h2>;

  const rating = calculateRating(courseData) || 0;
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <h1 className="text-center">{courseData.courseTitle}</h1>
          <p className="text-center">{courseData.description}</p>

          {/* ⭐ Centered Rating Section */}
          <div className="d-flex justify-content-center mt-3">
            <div className="rating-container text-center">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>{rating.toFixed(1)}</p>
              <div className="stars d-flex justify-content-center">
                {[...Array(fullStars)].map((_, i) => (
                  <img key={`full-${i}`} src={starIcon} alt="Full Star" width="20px" height="20px" />
                ))}
                {hasHalfStar && <img src={halfStarIcon} alt="Half Star" width="20px" height="20px" />}
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
                {courseData.courseratings.length} {courseData.courseratings.length > 1 ? "ratings" : "rating"}
              </p>
            </div>
          </div>

          <p className="text-muted text-center">{courseData.educator.name}</p>

          {/* Course Content Sections */}
          <div>
            {courseData.coursecontent.map((chapter, index) => {
              const previewTopic = chapter.chapterContent.find((topic) => topic.isPreviewfree);

              return (
                <div key={index} className="mt-4">
                  <p
                    className="detail-head"
                    onClick={() => toggleSection(index)}
                    style={{ cursor: "pointer", fontWeight: "bold", color: "#007bff" }}
                  >
                    {chapter.chapterTitle}
                    <span className="sub-span">
                      ({chapter.chapterContent.length} {chapter.chapterContent.length > 1 ? "lectures" : "lecture"}) &nbsp; - &nbsp;
                      <span className="details-span">{calculateChapterTime(chapter)}</span>
                    </span>
                  </p>

                  {/* Show or hide details-body based on openSection[index] */}
                  {openSection[index] && (
                    <div className="details-body">
                      {previewTopic && (
                        <p
                          onClick={() => setPlayerData({ videoId: previewTopic.lessonURL })}
                          style={{ fontWeight: "bold", color: "#28a745", cursor: "pointer" }}
                        >
                          Preview Available
                        </p>
                      )}
                      <ul>
                        {chapter.chapterContent.map((topic, topicIndex) => (
                          <li key={topicIndex}>
                            <p>{topic.lessonTitle}</p>
                            <div>
                              <span>{humanizeDuration(topic.lessonduration * 60 * 1000, { units: ["h", "m"] })}</span>
                            </div>
                            {topic.isPreviewfree && (
                              <button
                                onClick={() => setPlayerData({ videoId: topic.lessonURL.split('/').pop() })}
                                className="btn btn-success btn-sm mt-2"
                              >
                                Watch Preview
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 d-flex flex-column align-items-center text-center course-details-right">
          {courseData.image && (
            <img src={courseData.image} alt="Course Thumbnail" className="img-fluid rounded threehpx" style={{ maxWidth: "100%", height: "auto" }} />
          )}
          <p className="mt-3" style={{ fontSize: "30px", fontWeight: "bold" }}>
            {courseData.enrolledStudents.length}{" "}
            {courseData.enrolledStudents.length > 1 ? "students are enrolled" : "student is enrolled"}
          </p>
          <p style={{ fontSize: "20px", fontWeight: "400" }}>
            {currency} {(courseData.price - (courseData.discount * courseData.price) / 100).toFixed(2)} &nbsp; |&nbsp;&nbsp; {calculateCourseDuration(courseData)}
          </p>

          {/* Responsive YouTube Video */}
          {playerData && (
            <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
              <Youtube
                videoId={playerData.videoId}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                  },
                }}
                iframeClassName="position-absolute top-0 start-0 w-100 h-100"
              />
            </div>
          )}

          <button className="btn btn-primary mt-3" style={{ width: "50%" }}>
            {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
