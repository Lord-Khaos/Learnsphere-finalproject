/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { dummycourses } from "../../public/assets";
import { educatorDashboard } from "../../public/essets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanized-duration';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducation, setIsEducation] = useState(true);
  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const [educatorData, setEducationData] = useState([]);

  // Fetch all Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummycourses);
    setEducationData(educatorDashboard);
  };

  const calculateRating = (course) => {
    if (course.courseratings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseratings.forEach((rating) => (totalRating += rating.rating));
    return totalRating / course.courseratings.length;
  };

  const calculateChapterTime = (chapter) => {
    let totalTime = 0;
    chapter.chapterContent.map((topic) => (totalTime += topic.lessonduration));
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"], round: true });
  };

  const calculateCourseDuration = (course) => {
    let totalTime = 0;
    course.coursecontent.map((chapter) =>
      chapter.chapterContent.map((topic) => (totalTime += topic.lessonduration))
    );
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"], round: true });
  };

  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourse(dummycourses);
  };

  const addCourse = (newCourse) => {
    // Update dummycourses
    const updatedCourses = [...allCourses, newCourse];
    setAllCourses(updatedCourses);

    // Update educatorDashboard
    const updatedEducatorData = { ...educatorData[0] };
    updatedEducatorData.combinedData.push({ type: "course", ...newCourse });
    setEducationData([updatedEducatorData]);
  };

  const addChapterAndLecture = (courseId, chapter) => {
    const updatedCourses = allCourses.map((course) => {
      if (course.courseId === courseId) {
        return {
          ...course,
          courseContent: [...course.courseContent, chapter],
        };
      }
      return course;
    });
    setAllCourses(updatedCourses);
  
    // Update educatorDashboard
    const updatedEducatorData = { ...educatorData[0] };
    const courseIndex = updatedEducatorData.combinedData.findIndex((item) => item.courseId === courseId);
    if (courseIndex !== -1) {
      updatedEducatorData.combinedData[courseIndex].chapterContent.push(chapter);
    }
    setEducationData([updatedEducatorData]);
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  let value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducation,
    setIsEducation,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    fetchUserEnrolledCourses,
    enrolledCourse,
    educatorData,
    addCourse,
    addChapterAndLecture // Add the addCourse function to the context
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};