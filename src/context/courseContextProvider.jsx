import { useEffect, useState } from "react";
import CourseContext from "./courseContext";
import courseServices from "../firebase/courseServices";

function CourseContextProvider({ children }) {
  const [getAllCourse, setGetAllCourse] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const getAllCourseFunction = async () => {
    const serviceInstance = new courseServices();
    const courses = await serviceInstance.getCourses();
    const enrolledCourses = await serviceInstance.getEnrolledCourses();
    setGetAllCourse(courses);
    setEnrolledCourses(enrolledCourses);
  };

  useEffect(() => {
    getAllCourseFunction();
  }, []);

  return (
    <CourseContext.Provider value={{ getAllCourse, enrolledCourses }}>
      {children}
    </CourseContext.Provider>
  );
}

export { CourseContextProvider };
