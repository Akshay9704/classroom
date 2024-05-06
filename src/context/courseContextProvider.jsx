import { useEffect, useState } from "react";
import CourseContext from "./courseContext";
import courseServices from "../firebase/courseServices";

function CourseContextProvider({ children }) {
  const [getAllCourse, setGetAllCourse] = useState([]);

  const getAllCourseFunction = async () => {
    const serviceInstance = new courseServices();
    const courses = await serviceInstance.getCourses();
    setGetAllCourse(courses);
  };

  useEffect(() => {
    getAllCourseFunction();
  }, []);

  return (
    <CourseContext.Provider value={{ getAllCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export { CourseContextProvider };
