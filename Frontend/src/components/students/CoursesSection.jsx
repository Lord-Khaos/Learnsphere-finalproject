import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"


const CoursesSection = () => {

const {allCourses} = useContext(AppContext)

  return (
    <div className="m-5 text-center">
      <h1>Learn from the best</h1>
      <p className="lead">Discover our top rated courses across various categories. <br />
      From designing and business and welfare we have got it all</p>

<div className="course-grid">
  {allCourses.slice(0,4).map((course,index) => <CourseCard key={index} course={course} />)}
</div>

      <Link onClick={()=>{scrollTo(0,0)}} className="btn btn-outline-primary" style={{width:'100%'}}>Get Started</Link>
    </div>
  )
}

export default CoursesSection