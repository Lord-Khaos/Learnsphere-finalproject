import { useState } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css'; // Import the CSS file for styling
import { FaTachometerAlt, FaPlus, FaEdit, FaUser,FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: FaTachometerAlt },
    { name: 'Create Course', path: '/educator/add-course', icon: FaPlus },
    { name: 'Manage Courses', path: '/educator/my-courses', icon: FaEdit },
    { name: 'Students Enrolled', path: '/educator/students-enrolled', icon: FaUser },

  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar educator-sidebar ${isOpen ? 'open' : ''}`}>
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
    </>
  );
};

export default Sidebar;