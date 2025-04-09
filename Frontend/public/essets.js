export const educatorDashboard = [
    {
      educatorId: "EDU001",
      name: "Alice Johnson",
      profilePicture: "mknd.png",
      totalEarnings: 18500, // Earnings in USD
      totalStudents: 450,
      totalCourses: 7,
      monthlyEarnings: [
        { month: "January", earnings: 2500 },
        { month: "February", earnings: 3000 },
        { month: "March", earnings: 2800 },
        { month: "April", earnings: 3200 },
        { month: "May", earnings: 3500 },
        { month: "June", earnings: 4500 }
      ],
      combinedData: [
        {
          type: "course",
          courseId: "COURSE101",
          title: "JavaScript Mastery",
          enrolledStudents: 150,
          earnings: 6000,
          rating: 4.8,
          status: "Active"
        },
        {
          type: "course",
          courseId: "COURSE102",
          title: "React for Beginners",
          enrolledStudents: 110,
          earnings: 4500,
          rating: 4.7,
          status: "Active"
        },
        {
          type: "course",
          courseId: "COURSE103",
          title: "Node.js Backend Development",
          enrolledStudents: 90,
          earnings: 4000,
          rating: 4.6,
          status: "Active"
        },
        {
          type: "course",
          courseId: "COURSE104",
          title: "Python for Data Science",
          enrolledStudents: 50,
          earnings: 2500,
          rating: 4.9,
          status: "Inactive"
        },
        {
          type: "course",
          courseId: "COURSE105",
          title: "Machine Learning Fundamentals",
          enrolledStudents: 30,
          earnings: 1500,
          rating: 4.5,
          status: "Inactive"
        },
        {
          type: "enrollment",
          studentName: "Michael Lee",
          course: "JavaScript Mastery",
          date: "2025-03-10"
        },
        {
          type: "enrollment",
          studentName: "Sophia Brown",
          course: "React for Beginners",
          date: "2025-03-09"
        },
        {
          type: "enrollment",
          studentName: "Daniel Smith",
          course: "Node.js Backend Development",
          date: "2025-03-08"
        }
      ],
      notifications: [
        { message: "You received a payout of $3,500", type: "payout", date: "2025-03-10" },
        { message: "New student enrolled in 'JavaScript Mastery'", type: "enrollment", date: "2025-03-09" },
        { message: "Course 'Python for Data Science' received a new review", type: "review", date: "2025-03-08" }
      ]
    }
  ];
  
