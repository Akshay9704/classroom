import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CourseContext from '../context/courseContext.jsx';

const CourseDetails = () => {
  const [course, setCourse] = useState([]);
  const { getAllCourse } = useContext(CourseContext);
  const location = useLocation();

  const courseId = (location.state);

  useEffect(() => {
    const course = getAllCourse.find((course) => course.id === courseId);
    setCourse(course);
  }, [courseId]);

  return (
    <section className="mt-20 lg:py-16 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="">
              <div className="">
                <img
                  className="w-full rounded-xl"
                  src={course.thumbnail}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-4">
                <h2 className="mb-3 lg:text-2xl font-bold leading-loose tracking-wide md:text-xl">
                  {course.name}
                </h2>
                <p className="inline-block text-xl font-semibold text-gray-500 ">
                  <span className='font-bold text-gray-800'>Instructor: </span>{course.instructor}
                </p>
              </div>
              <div className="mb-6">
                <p>{course.description}</p>
                <h2 className="mt-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  <span className='font-bold text-gray-800'>Duration: </span> {course.duration}
                </h2>
              </div>
              <div className="mb-6 " />
              <div className="flex flex-wrap items-center mb-6">
                <button
                  onClick={() => handleEnroll(course.name)}
                  className="w-full px-4 py-3 text-center font-bold text-white bg-gray-500 hover:bg-gray-800 hover:text-gray-100 rounded-xl"
                >
                  Enroll in this course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails