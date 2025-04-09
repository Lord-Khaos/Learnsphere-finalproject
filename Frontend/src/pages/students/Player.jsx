import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import humanizeDuration from "humanized-duration";
import Youtube from "react-youtube";
import Footer from "../../components/students/footer";
import Rating from "../../components/students/Rating"; // Import the Rating component
import { dummycourses } from "../../../public/assets"; // Import dummycourses
import Navbar from "../../components/students/Navbar.jsx";

const Player = () => {
  const { id } = useParams();
  const { allCourses, calculateChapterTime } = useContext(AppContext);
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  useEffect(() => {
    if (allCourses.length > 0) {
      const courseId = Number(id);
      console.log(courseId);
      const findCourse = allCourses.find((course) => course.id === courseId);
      setCourseData(findCourse || null);
      setLoading(false);
    }
  }, [allCourses, id]);

  const handleRatingSubmit = ({ rating, comment }) => {
    const updatedCourse = {
      ...courseData,
      courseratings: [
        ...courseData.courseratings,
        { rating, comment, date: new Date().toISOString() },
      ],
    };

    // Update the course data in the dummyCourses object
    const updatedCourses = dummycourses.map((course) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );

    // Update the dummycourses object
    dummycourses.splice(0, dummycourses.length, ...updatedCourses);

    setCourseData(updatedCourse);
  };

  if (loading) return <Loading />;
  if (!courseData) return <h2 className="text-center mt-5">Course not found.</h2>;

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleWatchLesson = (lessonURL, lessonTitle) => {
    const videoId = lessonURL.split("/").pop();
    setPlayerData({ videoId, lessonTitle });
  };

  const handleCompleteLesson = (lessonURL) => {
    const videoId = lessonURL.split("/").pop();
    setCompletedLessons((prev) => new Set(prev).add(videoId));
  };

  return (
    <>
    < Navbar />
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">{courseData.courseTitle}</h1>
          <div>
            {courseData.coursecontent.map((chapter, index) => (
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

                {openSection[index] && (
                  <div className="details-body">
                    <ul>
                      {chapter.chapterContent.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <p>{topic.lessonTitle}</p>
                          <div>
                            <span>{humanizeDuration(topic.lessonduration * 60 * 1000, { units: ["h", "m"] })}</span>
                          </div>
                          <button
                            onClick={() => handleWatchLesson(topic.lessonURL, topic.lessonTitle)}
                            className="btn btn-success btn-sm mt-2"
                            >
                            {completedLessons.has(topic.lessonURL.split("/").pop()) ? "Rewatch" : "Watch Lesson"}
                          </button>
                          <button
                            onClick={() => handleCompleteLesson(topic.lessonURL)}
                            className="btn btn-primary btn-sm mt-2 ml-2"
                            >
                            Mark as Complete
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column align-items-center text-center course-details-right">
          {playerData && (
            <>
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                <Youtube
                  videoId={playerData.videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: { autoplay: 1 },
                  }}
                  iframeClassName="position-absolute top-0 start-0 w-100 h-100"
                  />
              </div>
              <h3 className="mt-3">{playerData.lessonTitle}</h3>
            </>
          )}
          <Rating onSubmit={handleRatingSubmit} />
        </div>
      </div>
      <Footer />
    </div>
          </>
  );
};

export default Player;