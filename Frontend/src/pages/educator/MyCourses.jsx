const Courses = () => {
  const courses = [
    { id: 1, title: 'JavaScript Mastery', enrolledStudents: 150, rating: 4.8 },
    { id: 2, title: 'React for Beginners', enrolledStudents: 110, rating: 4.7 },
    { id: 3, title: 'Node.js Backend Development', enrolledStudents: 90, rating: 4.6 },
  ];

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '1.8em',
    color: '#1e90ff',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    backgroundColor: '#ffffff',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  };


  const titleStyle = {
    margin: '0',
    fontSize: '1.4em',
    color: '#333',
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '1em',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Courses</h2>
      <ul style={listStyle}>
        {courses.map((course) => (
          <li
            key={course.id}
            style={listItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={titleStyle}>{course.title}</h3>
            <p style={textStyle}>Enrolled Students: {course.enrolledStudents}</p>
            <p style={textStyle}>Rating: {course.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;