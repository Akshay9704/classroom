import { db } from "../firebase/firestore";

import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const courseCollectionRef = collection(db, "courses");

class CourseServices {
    getCourses = async () => {
        const { docs } = await getDocs(courseCollectionRef);
        return docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
    }
    editCourse = async (id, course) => {
        const CourseDoc = doc(db, "courses", id);
        return updateDoc(CourseDoc, course);
    }
}

export default CourseServices;