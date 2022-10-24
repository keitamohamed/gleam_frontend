import {useAppDispatch, useAppStore} from "../setup/academy/useReduxHook";
import {GET_REQUEST, PUT_REQUEST} from "../api/Request";
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

    const updateAddress = async () => {
        // @ts-ignore
        await dispatch(PUT_REQUEST(null, ApiPath.UPDATE_TEACHER_ADDRESS, address, setMessage, setErrorMessage))
    }

    useEffect(() => {
        if (!isDataLoaded) {
            findTeacherByID(34493)
            isDataLoaded = true;
        }
    }, [])

    return {
        findTeacherByID,
        updateAddress
    }
}