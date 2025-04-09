const StudentsEnrolled = () => {
  const students = [
    { id: 1, name: 'Michael Lee', email: 'michael.lee@example.com', enrolledDate: '2025-03-10' },
    { id: 2, name: 'Sophia Brown', email: 'sophia.brown@example.com', enrolledDate: '2025-03-09' },
    { id: 3, name: 'Daniel Smith', email: 'daniel.smith@example.com', enrolledDate: '2025-03-08' },
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

  const nameStyle = {
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
      <h2 style={headingStyle}>Students Enrolled</h2>
      <ul style={listStyle}>
        {students.map((student) => (
          <li
            key={student.id}
            style={listItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={nameStyle}>{student.name}</h3>
            <p style={textStyle}>Email: {student.email}</p>
            <p style={textStyle}>Enrolled Date: {student.enrolledDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsEnrolled;