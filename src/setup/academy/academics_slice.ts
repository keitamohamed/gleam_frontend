import {createSlice} from "@reduxjs/toolkit";
import {AcademicProperty} from "../../interface/interface";

const course: AcademicProperty["course"] = {}
const initialState: AcademicProperty = {
    course: {},
    courses: [],
    major: {},
    majors: []

}

const academicSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setMajor: (state, action) => {
            state.major = action.payload
        },
        setMajors: (state, action) => {
            state.majors = action.payload
        },
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        setCourse: (state, action) => {
            state.course = action.payload
        },
        updateCourse: (state, action) => {

        }

    }
})

export const academicAction = academicSlice.actions;
export default academicSlice