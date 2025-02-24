
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/students/CourseCard"; // Import CourseCard
import { useParams } from "react-router-dom";
import SearchBar from "../../components/students/SearchBar";
import { useState,useEffect } from "react";
import Footer from "../../components/students/footer";
const CourseList = () => {

  const {allCourses,navigate} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourse,setFilteredCourse] = useState([])
  

  useEffect(() => {
    if(allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input ? 
setFilteredCourse(
  tempCourses.filter(
    item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
  )
)
      :
      setFilteredCourse(tempCourses)

    }
  },[allCourses,input])
  return (
<>
<header className="course-header" style={{display: "flex", justifyContent: "space-between"}}>
        <h2 style={{alignSelf:'end',justifySelf:'flex-end'}}>Explore Our Courses</h2>

      <SearchBar data={input}/>
      </header>

{
  input &&   <div className="search-toggle">
  <p className="search-term">{input}</p>
  <p className="clear-search" onClick={() => navigate("/course-list")}>X</p>
</div>
}

    <div className="course-grid">
     
      {filteredCourse.map((course,index) => <CourseCard key={index} course={course} />)}
    </div>
<Footer/>
    </>
  );
};

export default CourseList;
