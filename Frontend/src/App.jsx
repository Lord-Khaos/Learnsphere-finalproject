import { Routes, Route } from "react-router-dom";
import Home from "./pages/students/Home.jsx";
import CourseList from "./pages/students/CourseList.jsx";
import CourseDetails from "./pages/students/CourseDetails.jsx";
import MyEnrollments from "./pages/students/MyEnrollments.jsx";
import Player from "./pages/students/player.jsx";
import Loading from "./components/students/Loading.jsx";
import Educator from "./pages/educator/educator.jsx";
import Dashboard from "./pages/educator/Dashboard.jsx";
import AddCourse from "./pages/educator/AddCourse.jsx";
import MyCourses from "./pages/educator/MyCourses.jsx";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled.jsx";
import Navbar from "./components/students/Navbar.jsx";
import Contact from "./pages/students/Contact.jsx";
import FAQ from "./pages/students/FAQ.jsx";
import About from "./pages/students/About.jsx";

const App = () => {

const isEducatorRoute = location.pathname.includes('/educator')

  return (
    <div>
      {!isEducatorRoute && <Navbar/> }
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course-list" element={<CourseList />} />
      <Route path="/course-list/:input" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/my-enrollments" element={<MyEnrollments />} />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/loading/:path" element={<Loading />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />

      {/* Educator Nested Routes */}
      <Route path="/educator" element={<Educator />}>
        <Route index element={<Dashboard />} /> {/* Default page */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="students-enrolled" element={<StudentsEnrolled />} />
      </Route>
    </Routes>
    </div>
   
  );
};

export default App;
