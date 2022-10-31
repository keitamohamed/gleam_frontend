import {useAppDispatch, useAppStore} from "../setup/academy/useReduxHook";
import {POST_REQUEST, GET_REQUEST, PUT_REQUEST, DELETE_REQUEST} from "../api/Request";
import {ApiPath} from "../api/path";
import {teacherAction} from "../setup/academy/teacher_slice";
import {useEffect} from "react";

let isDataLoaded = false;

export const useTeacher = () => {
    const dispatch = useAppDispatch()
    const {teacher, address, auth} = useAppStore((state) => state.teacher)

    const setSelectedTeacher = (teacher: any) => {
        dispatch(teacherAction.loadTeacher(teacher))
        dispatch(teacherAction.setAuth(teacher))
        dispatch(teacherAction.setAddresses(teacher))
        dispatch(teacherAction.setCourse(teacher))
    }

    const findTeacherByID = (id: number) => {
        findTeacher(id)
    }

    const setErrorMessage = (error: object) => {
        dispatch(teacherAction.setErrorMessage(error))
    }

    const setMessage = (message: object) => {
      dispatch(teacherAction.setMessage(message))
    }

    const findTeacher = (id: number) => {
        // @ts-ignore
        dispatch(GET_REQUEST(null, ApiPath.GET_TEACHER(id), setSelectedTeacher, setErrorMessage))
    }

    const newAddress = async () => {
        // @ts-ignore
        await dispatch(POST_REQUEST(null, ApiPath.NEW_ADDRESS(teacher.id, 'teacher'), address,  setMessage, setErrorMessage))
        await findTeacherByID(teacher.id)
    }

    const updateAddress = async () => {
        // @ts-ignore
        await dispatch(PUT_REQUEST(null, ApiPath.UPDATE_TEACHER_ADDRESS, address, setMessage, setErrorMessage))
        await findTeacherByID(teacher.id)
    }

    const deleteAddress = async (id: number) => {
        // @ts-ignore
        await dispatch(DELETE_REQUEST(null, ApiPath.DELETE_ADDRESS(teacher.id, id, 'teacher'), setMessage, setErrorMessage))
        await findTeacher(teacher.id);
    }

    useEffect(() => {
        if (!isDataLoaded) {
            findTeacherByID(34493)
            isDataLoaded = true;
        }
    }, [])

    return {
        newAddress,
        findTeacherByID,
        updateAddress,
        deleteAddress
    }
}