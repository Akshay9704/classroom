import { db } from "../firebase/firestore";

import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const courseCollectionRef = collection(db, "courses");
const enrolledCollectionRef = collection(db, "enrolled");

class CourseServices { 
    getCourses = async () => {
        const { docs } = await getDocs(courseCollectionRef);
        return docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
    }
    getEnrolledCourses = async () => {
        const { docs } = await getDocs(enrolledCollectionRef);
        return docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
    }
}

export default CourseServices;