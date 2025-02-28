import { Outlet } from "react-router-dom"
import Sidebar from "../../components/educator/Sidebar"
import EducatorNavbar from "../../components/educator/Navbar"
import EducatorFooter from "../../components/educator/Footer"
const Educator = () => {
  return (
    <div>
       <EducatorNavbar />
      <h1 style={{textAlign:'center'}}>Educator Page</h1>
      <div>
       <Sidebar />
        {<Outlet />}
        <EducatorFooter/>
      </div>
    </div>
  )
}

export default Educator