import { Link } from "react-router-dom";
import './Sidebar.css'; // Import the CSS file for styling
import { FaTachometerAlt, FaPlus, FaEdit, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {

  const menuItems = [
    { name: 'Dashboard', path: '/educator-dashboard', icon: FaTachometerAlt },
    { name: 'Create Course', path: '/create-course', icon: FaPlus },
    { name: 'Manage Courses', path: '/manage-courses', icon: FaEdit },
    { name: 'Profile', path: '/educator-profile', icon: FaUser },
    { name: 'Settings', path: '/educator-settings', icon: FaCog },
  ];

  return (
    <div className="sidebar educator-sidebar">
      <h2 className="sidebar-title">Educator Dashboard</h2>
      <ul className="sidebar-list">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <Link to={item.path} className="sidebar-link">
              <item.icon className="sidebar-icon" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;