import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/header.js"
import CourseContext from '../context/courseContext.jsx';
import Card from '../components/cards.js';

const Courses = () => {
  const [search, setSearch] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { getAllCourse } = useContext(CourseContext);

  const navigate = useNavigate();

  useEffect(() => {
    setFilteredCourses(
      getAllCourse.filter((course) =>
        course.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, getAllCourse]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRoute = (courseId) => {
    navigate(`/course-details/${courseId}`, { state: courseId });
  };

  return (
    <div>
      <Header />
      <div className='flex justify-center mt-5'>
        <h1 className='text-3xl font-bold'>Featured Courses</h1>
      </div>
      <div className='flex justify-center mt-4'>
        <input onChange={handleSearch} type='text' placeholder='Search for courses' className='border border-gray-300 rounded-lg py-2 px-4 w-1/2 bg-gray-100 outline-none' />
      </div>
      <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 mx-5'>
          {filteredCourses.map((course) => (
            <div onClick={() => handleRoute(course.id)} key={course.id}>
              <Card thumbnail={course.thumbnail} title={course.name} description={course.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
