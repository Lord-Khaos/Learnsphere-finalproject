import Hero from "../../components/students/Hero"
import CoursesSection from "../../components/students/CoursesSection"
import Testimonials from "../../components/students/testimonials"
import CallToAction from "../../components/students/CallToAction"
import Footer from "../../components/students/footer"
import Navbar from "../../components/students/Navbar.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
        < Hero />
<CoursesSection />
<Testimonials />
        <CallToAction />
<Footer />
    </div>
  )
}

export default Home