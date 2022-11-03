import {useEffect} from "react";
import {useNavigate} from 'react-router-dom'

import {useAcademics} from "../../hook/useAcademics";
import {useAppStore} from "../../setup/academy/useReduxHook";

export const Academics = () => {
    const nav = useNavigate()
    const {majors} = useAppStore((state) => state.academics)
    const {fetchAcademics, setSelectedMajor} = useAcademics();

    const onClickNavigate = (id: number) => {
        setSelectedMajor(id);
        nav('/academics/major');
    }

    useEffect(() => {
        fetchAcademics()
    }, [])
    return (
        <div className='academic'>
            <div className="layout">
                <div className="sidenav">
                </div>
                <div className="main">
                    {
                        majors?.map((major, index) => {
                            return (
                                <div className="major_card"
                                     key={`${major.majorID}_${index}`}
                                     onClick={() => onClickNavigate(major.majorID!)}>
                                    <div className="body">
                                        <h3>{`${major.name} Department`}</h3>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}