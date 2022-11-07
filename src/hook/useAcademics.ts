import {useAppDispatch, useAppStore} from "../setup/academy/useReduxHook";
import {academicAction} from "../setup/academy/academics_slice";
import {GET_REQUEST} from "../api/Request";
import {ApiPath} from "../api/path";

export const useAcademics = () => {
    const dispatch = useAppDispatch()
    const {majors} = useAppStore((state) => state.academics)

    const setMajors = (props: object[]) => {
        dispatch(academicAction.setMajors(props))
    }

    const setMessage = () => {}

    const setErrorMessage = () => {
    }

    const setSelectedMajor = (id: number) => {
        const major = majors?.find(m => m.majorID == id)
        dispatch(academicAction.setMajor(major))
        dispatch(academicAction.setSubjects(major?.subjects))
    }

    const fetchAcademics = () => {
        // @ts-ignore
        dispatch(GET_REQUEST(null, ApiPath.GET_MAJOR, setMajors, setMessage))
    }



    return {
        fetchAcademics,
        setSelectedMajor
    }
}