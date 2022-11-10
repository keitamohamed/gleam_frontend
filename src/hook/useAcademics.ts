import {useAppDispatch, useAppStore} from "../setup/academy/useReduxHook";
import {academicAction} from "../setup/academy/academics_slice";
import {GET_REQUEST} from "../api/Request";
import {ApiPath} from "../api/path";
import {Course} from "../interface/interface";

export const useAcademics = () => {
    const dispatch = useAppDispatch()
    const {majors} = useAppStore((state) => state.academics)

    const setMajors = (props: object[]) => {
        dispatch(academicAction.setMajors(props))
    }

    const setCourse = (props: Course[]) => {
        dispatch(academicAction.setCourses(props))
    }

    const setMessage = () => {}

    const setErrorMessage = () => {

    }

    const setSelectedMajor = (id: number) => {
        const major = majors?.find(m => m.majorID == id)
        dispatch(academicAction.setMajor(major))
        dispatch(academicAction.setSubjects(major?.subjects))
    }

    const fetchAcademics = async () => {
        // @ts-ignore
        await dispatch(GET_REQUEST(null, ApiPath.GET_MAJOR, setMajors, setMessage))

        // @ts-ignore
        dispatch(GET_REQUEST(null, ApiPath.GET_COURSES, setCourse, setMessage))
    }



    return {
        fetchAcademics,
        setSelectedMajor
    }
}