import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './AddCourse.css';

const AddCourse = () => {
  const { addCourse, addChapterAndLecture } = useContext(AppContext);
  const [course, setCourse] = useState({
    courseId: '',
    title: '',
  });
  const [chapter, setChapter] = useState({
    chapterId: '',
    chapterTitle: '',
    chapterContent: [],
  });
  const [lecture, setLecture] = useState({
    lectureId: '',
    lectureTitle: '',
    videoUrl: '',
    lessonDuration: 0,
  });

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleChapterChange = (e) => {
    const { name, value } = e.target;
    setChapter({ ...chapter, [name]: value });
  };

  const handleLectureChange = (e) => {
    const { name, value } = e.target;
    setLecture({ ...lecture, [name]: value });
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    addCourse(course);
    alert('Course added successfully!');
  };

  const handleChapterSubmit = (e) => {
    e.preventDefault();
    addChapterAndLecture(course.courseId, chapter);
    alert('Chapter added successfully!');
  };

  const handleLectureSubmit = (e) => {
    e.preventDefault();
    const updatedChapter = { ...chapter, chapterContent: [...chapter.chapterContent, lecture] };
    setChapter(updatedChapter);
    alert('Lecture added successfully!');
  };

  return (
    <div className="add-course">
      <h2>Add New Course</h2>
      <form onSubmit={handleCourseSubmit}>
        <label>
          Course ID:
          <input type="text" name="courseId" value={course.courseId} onChange={handleCourseChange} required />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={course.title} onChange={handleCourseChange} required />
        </label>
        <button type="submit">Add Course</button>
      </form>

      <h2>Add New Chapter</h2>
      <form onSubmit={handleChapterSubmit}>
        <label>
          Chapter ID:
          <input type="text" name="chapterId" value={chapter.chapterId} onChange={handleChapterChange} required />
        </label>
        <label>
          Chapter Title:
          <input type="text" name="chapterTitle" value={chapter.chapterTitle} onChange={handleChapterChange} required />
        </label>
        <button type="submit">Add Chapter</button>
      </form>

      <h2>Add New Lecture</h2>
      <form onSubmit={handleLectureSubmit}>
        <label>
          Lecture ID:
          <input type="text" name="lectureId" value={lecture.lectureId} onChange={handleLectureChange} required />
        </label>
        <label>
          Lecture Title:
          <input type="text" name="lectureTitle" value={lecture.lectureTitle} onChange={handleLectureChange} required />
        </label>
        <label>
          Video URL:
          <input type="text" name="videoUrl" value={lecture.videoUrl} onChange={handleLectureChange} required />
        </label>
        <label>
          Lesson Duration (minutes):
          <input type="number" name="lessonDuration" value={lecture.lessonDuration} onChange={handleLectureChange} required />
        </label>
        <button type="submit">Add Lecture</button>
      </form>
    </div>
  );
};

export default AddCourse;