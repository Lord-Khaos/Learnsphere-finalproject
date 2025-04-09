
import { educatorDashboard } from '../../../public/essets'; 
import './Dashboard.css';

const Dashboard = () => {
  const educator = educatorDashboard[0];

  return (
    <div className="dashboard">
      <h1>{educator.name}&apos;s Dashboard</h1>
      <img src={educator.profilePicture} alt={`${educator.name}'s profile`} />
      <p>Total Earnings: ${educator.totalEarnings}</p>
      <p>Total Students: {educator.totalStudents}</p>
      <p>Total Courses: {educator.totalCourses}</p>

    
    </div>
  );
};

export default Dashboard;