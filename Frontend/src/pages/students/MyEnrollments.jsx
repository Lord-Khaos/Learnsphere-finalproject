import './Enrollments.css'
import { AppContext } from '../../context/AppContext'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Line } from 'rc-progress'
import Footer from '../../components/students/footer'
import Navbar from "../../components/students/Navbar.jsx";

const MyEnrollments = () => {
  const { enrolledCourse, calculateCourseDuration } = useContext(AppContext);
  const navigate = useNavigate();

  const [progressArray, setProgressArray] = useState([]);

  useEffect(() => {
    if (enrolledCourse.length > 0) {
      setProgressArray(enrolledCourse.map(() => ({ lectureCompleted: 0, totalLectures: 10 })));
    }
  }, [enrolledCourse]);

  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>My Enrollments Page</h1>

      <table id="My-courses">
        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
            <th>Completed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourse && enrolledCourse.length > 0 ? (
            enrolledCourse.map((course, index) => (
              <tr key={index}>
                <td>
                  <img src={course.image} alt={course.courseTitle} height={150} width={170} style={{ borderRadius: '10px' }} />
                  <div>
                    <p>{course.courseTitle}</p>
                    <Line 
                      strokeWidth={2} 
                      percent={(progressArray[index]?.lectureCompleted / progressArray[index]?.totalLectures) * 100 || 0} 
                    />
                  </div>
                </td>
                <td>{calculateCourseDuration(course)}</td>
                <td>{`${progressArray[index]?.lectureCompleted || 0} / ${progressArray[index]?.totalLectures || 10}`} <span>Lecture(s)</span></td>
                <td>
                  <p onClick={() => navigate('/player/' + course.id)}>
                    {progressArray[index]?.lectureCompleted / progressArray[index]?.totalLectures === 1 ? 'Completed' : 'OnGoing'}
                  </p>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}>No Enrolled Courses</td>
            </tr>
          )}
        </tbody>
      </table>
      <Footer />
    </div>
  )
}

export default MyEnrollments;
