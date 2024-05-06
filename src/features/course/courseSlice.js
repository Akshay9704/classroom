import { createSlice } from '@reduxjs/toolkit';
// import CourseServices from '../../firebase/courseServices';

// const Courses = CourseServices.getAllCourses();

const initialState = {
    courses: [{
        id: 1,
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
    }],
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        getCourse: (state, action) => {
            state.courses = action.payload;
        },
    },
});

export const { getCourse } = courseSlice.actions;

export default courseSlice.reducer;
