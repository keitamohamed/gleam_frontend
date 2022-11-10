import {useContext, useEffect} from "react";
import {GoPlusSmall} from 'react-icons/go'
import {HiOutlineMinus} from 'react-icons/hi'

import {Course} from "../../interface/interface";
import {useAppDispatch, useAppStore} from "../../setup/academy/useReduxHook";
import {DashboardContext} from "../../setup/context/Context";
import {accordion, courseAccordion} from "../../util/accordion";

export const Major = () => {
    const dashCtx = useContext(DashboardContext)
    const dispatch = useAppDispatch()
    const {major, subjects, courses} = useAppStore((state) => state.academics)

    const setActionType = () => {
        dashCtx.setActionType('')
    }

    const selectedSubject = (id: number) => {
        const subject = subjects?.find(subject => subject.subjectID === id)
        // dispatch(academicAction.setCourses(subject?.courses))
    }

    const getCourseTotalCredit = (subjectsCourse: Course[]) => {
        const list: Course[] = []
        courses?.find(course => {
            subjectsCourse.map(id => {
                return id === course.id ? list.push(course) : 0
            })
        })
        return list?.reduce((accumulator, course) => {
            return accumulator + course.credit!
        }, 0)
    }

    useEffect(() => {
        accordion()
        courseAccordion()
    }, [])

    return(
        <div className='major'>
            <div className="title_container">
                <h2>{major?.name}</h2>
            </div>
            <div className="layout grid sm:grid-cols-1 md:grid-cols-12 gap-2">
                <div className="sidenav col-span-4">
                    <h2>Contact Information</h2>
                    <h5>Academic Advising</h5>
                    <div className="information">
                        <p><span>Phone:</span> 540-000-1111</p>
                        <p><span>Email:</span> gleam@email.gu.edu</p>
                        <p><span>Website:</span> gleam.edu/computer-science</p>
                    </div>
                </div>
                <div className="accordion col-span-8">
                    <div className="accordion-tabs s:!grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3">
                        <li className="accordion-tab" data-actab-id='1' onClick={setActionType}>Overview</li>
                        <li className="accordion-tab" data-actab-id='2' onClick={setActionType}>Requirements</li>
                        <li className="accordion-tab" data-actab-id='3' onClick={setActionType}>Related Programs</li>
                    </div>
                    <div className="accordion-content">
                        <section className="tab-section w-full activate_section" data-actab-id='1'>
                            <div className="description">
                                <ul>
                                {
                                    major?.description?.split('\n').map((description, index) => {
                                        return description.trim().charAt(0) === ">" ?
                                            <li className='list-style' key={`${1251}_${index}`}>
                                                {description.trim().substring(1)}</li> :
                                            <p key={`${1251}_${index}`}>{description.trim()}</p>
                                    })
                                }
                                </ul>
                            </div>
                        </section>
                        <section className="tab-section" data-actab-id='2'>
                            <div className="content">
                                {
                                    subjects!.map((subject, index) => {
                                        return <div className={`subject-content`} key={subject.subjectID}>
                                            <div className="course-title-container"
                                                 data-actab-id={subject.subjectID}>
                                                <li className='course-title'
                                                    data-actab-id={subject.subjectID}
                                                    >{subject.name}
                                                </li>
                                                <li className='icon-container'>
                                                    <li className='icon expand activate'
                                                        data-actab-id={subject.subjectID}
                                                        >
                                                        Expand <GoPlusSmall/></li>
                                                    <li className='icon hide'
                                                        data-actab-id={subject.subjectID}
                                                    >
                                                        Hide <HiOutlineMinus/></li>
                                                </li>
                                            </div>
                                            <div className="courses-content" data-actab-id={subject.subjectID}>
                                                <div className="course">
                                                    {
                                                        subject.courses?.map((subCourse) => {
                                                            return courses?.map((course) => {
                                                                return subCourse == course.id || subCourse.id == course.id ? <li key={course.id}>{course.name}</li> : <></>
                                                            })
                                                        })
                                                    }
                                                </div>
                                                <div className="courses-credit">
                                                    <li>Total Credits:</li>
                                                    <li>
                                                        {
                                                            getCourseTotalCredit(subject.courses!)
                                                        }
                                                    </li>
                                                </div>
                                                <div className="subject-note">
                                                    <h5>Note</h5>
                                                    <p>{subject.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}