/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { dummycourses } from "../../public/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanized-duration'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = (props) => {

const currency = import.meta.env.VITE_CURRENCY
const navigate = useNavigate()

const [allCourses, setAllCourses] = useState([])
const [isEducation, setIsEducation] = useState(true)

//Fetch all Courses
const fetchAllCourses = async () => {
    setAllCourses(dummycourses)
}

const calculateRating = (course)=>{
    if (course.courseratings.length === 0){
        return 0;
    }
    let totalRating = 0;
    course.courseratings.forEach(rating => totalRating += rating.rating);
    return totalRating / course.courseratings.length;
}

const calculateChapterTime = (chapter) => {
    let totalTime = 0;
    chapter.chapterContent.map((topic) => totalTime += topic.duration);
    return humanizeDuration(totalTime*60*1000, {units: ['h', 'm'], round: true});
}

const calculateCourseDuration = (course) => {
    let totalTime = 0;
 
    course.courseContent.map((chapter) => chapter.chapterContent.map((topic) => totalTime += topic.duration));
    return humanizeDuration(totalTime*60*1000, {units: ['h', 'm'], round: true});
}

const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) =>
    if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
    })};
    return totalLectures;
}

useEffect( () => {
    fetchAllCourses()
},[])

let value={
    currency,allCourses,navigate,calculateRating,isEducation,setIsEducation
}

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}