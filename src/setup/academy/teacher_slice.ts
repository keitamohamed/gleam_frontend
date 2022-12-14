import {createSlice} from "@reduxjs/toolkit";

import {TeacherInitialState} from "../../interface/interface_a";

const reSetTeacher: TeacherInitialState["teacher"] = {
    id: 0,
    name: "",
    gender: "",
    phone: "",
    dob: ""
}

const initialState: TeacherInitialState = {
    addresses: [],
    address: {},
    auth: {
        authID: 0,
        email: "",
        password: ""
    },
    teacher: {
        dob: "",
        gender: "",
        id: 0,
        name: "",
        phone: ""
    },
    courses: [],
    teachers: [],
    message: {},
    error: {},
}

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        addTeacher: (state, action) => {
            const teacher = action.payload
            state.teacher[teacher.name as keyof Object] = teacher.value
        },
        loadTeacher: (state, action) => {
           state.teacher = action.payload[0]
        },
        loadTeachers: (state, action) => {
            state.teachers = action.payload
        },
        setAuth: (state, action) => {
            state.auth = action.payload[0].auth
        },
        setAddresses: (state, action) => {
            state.addresses = action.payload[0].address
        },
        setCourse: (state, action) => {
            state.courses = action.payload[0].courses
        },
        onChangeAddress: (state, action) => {
            const inputValue = action.payload
            state.address[inputValue.name as keyof Object] = inputValue.value
        },
        setSelectedAddress: (state, action) => {
            state.address = action.payload
        },
        initTeacher: (state) => {
            state.teacher = reSetTeacher
        },
        setErrorMessage: (state, action) => {
            state.error = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        reSetErrorMessage: (state) => {
            state.error = {}
        },
        reSetMessage: (state) => {
            state.message = {}
        }
    }
})

export const teacherAction = teacherSlice.actions;
export default teacherSlice