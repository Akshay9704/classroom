import React, { useState, useEffect } from 'react'
import Header from "../components/header.js"
import { useParams } from "react-router";
import { doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addToDash } from '../redux/dashSlice.jsx';
import toast, { Toaster } from 'react-hot-toast';

const CourseDetails = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [enrolledData, setEnrolledData] = useState([]);

  const dispatch = useDispatch();
  const enrollCourse = useSelector(state => state.dashboard);

  const { id } = useParams();

  const getCourseData = async () => {
    setLoading(true)
    try {
      const courseTemp = await getDoc(doc(db, "courses", id))
      setCourse(courseTemp.data());
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const fetchEnrolledData = async () => {
    try {
      const enrolledDataSnapshot = await getDocs(collection(db, "enrolled"));
      const enrolledDataArray = enrolledDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEnrolledData(enrolledDataArray);
      const isEnrolled = enrolledDataArray.some(enrolledCourse => enrolledCourse.name === course.name);
      if (isEnrolled) {
        setDisable(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEnroll = async () => {
    try {
      const enrolledCourseData = { ...course };
      const enrolledCourseRef = await addDoc(collection(db, "enrolled"), enrolledCourseData);
      dispatch(addToDash({ id: enrolledCourseRef.id, ...enrolledCourseData}));
      toast.success('Enrolled in the course successfully!');
      setDisable(true);
      fetchEnrolledData();
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getCourseData();
    fetchEnrolledData();
  }, [course, enrollCourse, enrolledData])

  return (
    <>
      <Toaster />
      <Header />
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
                  <h2 className="mt-2 text-md font-bold text-gray-700 dark:text-gray-400">
                    <span className='font-bold text-gray-800'>Schedule: </span> {course.schedule}
                  </h2>
                </div>
                <div className="mb-6 " />
                <div className="flex flex-wrap items-center mb-6">
                  <button
                    onClick={handleEnroll}
                    disabled={disable}
                    className={`w-full px-4 py-3 text-center font-bold text-white bg-gray-500 ${disable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-gray-100'
                      } rounded-xl`}
                  >
                    {disable ? 'Already Enrolled in this course' : 'Enroll in this course'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseDetails
