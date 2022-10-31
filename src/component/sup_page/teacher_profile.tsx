import {useContext, useEffect} from "react";

import {AiOutlineEdit, AiOutlineClose} from 'react-icons/ai'
import {FaAddressBook} from 'react-icons/fa'
import {MdOutlineExpandMore, MdOutlineExpandLess} from 'react-icons/md'
import {useAppDispatch, useAppStore} from "../../setup/academy/useReduxHook";

import {accordion} from "../../util/accordion";
import image from "/src/assets/image/photo.jpg"
import {teacherAction} from "../../setup/academy/teacher_slice";
import {DashboardContext} from "../../setup/context/Context";
import {AddressForm} from "../reusable/form";
import {useTeacher} from "../../hook/useTeacher";
import {Card} from "../reusable/card_c";

export const Teacher_Profile = () => {
    const {deleteAddress} = useTeacher()
    const dashCtx = useContext(DashboardContext)
    const dispatch = useAppDispatch()
    const {teacher, addresses, auth, courses} = useAppStore((state) => state.teacher)

    const setSelectedAddress = (id: number, action: string) => {
        if (id !== 0) {
            const location = addresses.find(a => a.addressID == id);
            dispatch(teacherAction.setSelectedAddress(location))
        }
        dashCtx.setActionType(action);
    }

    const setActionType = () => {
      dashCtx.setActionType('')
    }

    useEffect(() => {
        accordion()
    }, [teacher, addresses])

    return (
        <div className={`profile w-full`}>
            <div className="layout grid sm:grid-cols-1 md:grid-cols-12 gap-x-16">
                <div className="left_side sm:grid-cols-1 md:col-start-1 md:col-end-4">
                    <div className="image_container">
                        <img
                            className="w-32 h-32 sm:!w-36 sm:!h-36 md:w-48 md:h-auto md:rounded-md rounded-full mx-auto"
                            src={image} alt="img"/>
                        <h2 className='s:block s:mt-3 sm:block sm:mt-3 md:hidden'>{teacher.name}</h2>
                        <p className='s:block sm:block md:hidden'>{auth.email}</p>
                        <p className='s:block sm:block md:hidden'>{courses[0]?.name}</p>

                    </div>
                    <li className="accordion_toggle s:grid sm:grid md:hidden">
                        <span>Show info</span>
                        <MdOutlineExpandMore className='accordion-expand-more'/>
                        <MdOutlineExpandLess className='accordion-expand-less hidden' />
                    </li>
                    <div className="information s:h-0.5 s:!w-3/4 s:m-8 md:!h-auto md:!opacity-100">
                        <span className={'add_'}>Information</span>
                        <section>
                            <p><span>Name: </span>{teacher.name}</p>
                            <p><span>Gender: </span>{teacher.gender} </p>
                            <p><span>Phone: </span>{teacher.phone}</p>
                        </section>
                    </div>
                    <div className="information s:h-0.5 s:!w-3/4 s:m-8 md:!h-auto md:!opacity-100">
                        <span className={'add_'}>Addresses</span>
                        {
                            addresses.map((a, index) => {
                                return (
                                    <section className='address' key={`${a.state}_${index}`}>
                                        <p>
                                            {a.street}<br/>{a.city}, {a.state}
                                        </p>
                                    </section>
                                )
                            })
                        }
                    </div>
                    <div className="information s:h-0.5 s:!w-3/4 s:m-8 md:!h-auto md:!opacity-100">
                        <span className={'add_'}>Skills</span>
                        <section>
                            {
                                courses.map((course, index) => {
                                    return <p key={`${course.id}_${index}`}>{course.name}</p>
                                })
                            }
                        </section>
                    </div>
                    </div>
                <div className="main grid grid-cols-1 md:col-span-8">
                    <div className="section_top s:hidden s:z-0">
                        <div className="info_container">
                            <h3>{teacher.name}</h3>
                            <p>Web Developer</p>
                            <p><span>Email: </span>{auth.email}</p>
                        </div>
                    </div>
                    <div className="accordion w-full">
                        <section className="accordion-tabs">
                            <li className="accordion-tab" data-actab-id='1' onClick={setActionType}>Course</li>
                            <li className="accordion-tab" data-actab-id='2' onClick={setActionType}>Student</li>
                            <li className="accordion-tab" data-actab-id='3' onClick={setActionType}>Staff</li>
                            <li className="accordion-tab" data-actab-id='4' onClick={setActionType}>Edit</li>
                        </section>
                        <div className="accordion-content">
                            <section className="tab-section card_container  s:grid-cols-1 sm:grid-cols-2 w-full activate_section"
                                     data-actab-id='1'>
                                {
                                    courses.map((course, index) => {
                                        return <Card
                                            key={`${course.id}_${index}`}
                                            id={course.id}
                                            name={course.name}
                                            description={course.description}
                                            credit={course.credit}/>
                                    })
                                }
                            </section>
                            <section className="tab-section w-full" data-actab-id='2'>
                                tab 2
                            </section>
                            <section className="tab-section w-full" data-actab-id='3'>
                                Tab 3
                            </section>
                            <section className="tab-section w-full" data-actab-id='4'>
                                {
                                    dashCtx.getAction().actionType === '' ?
                                        <div className="address_container s:!w-full">
                                            <div className="btn_container">
                                                <li onClick={() => setSelectedAddress(0, 'newAddress')}>
                                                    <FaAddressBook/>
                                                </li>
                                            </div>
                                            {
                                                addresses.map((a, index) => {
                                                    return (
                                                        <section className="address md:!w-4/6" key={`${index}_${a.state}`}>
                                                            <div className="edit_container md:!w-2/6 md:float-right md:mb-4">
                                                                <li onClick={() => setSelectedAddress(a.addressID, 'editAddress')}>
                                                                    <AiOutlineEdit/>
                                                                </li>
                                                                <li onClick={() => deleteAddress(a.addressID)}>
                                                                    <AiOutlineClose/>
                                                                </li>
                                                            </div>
                                                            <div className="address_container">
                                                                <section
                                                                    className=''
                                                                    key={`${a.state}_${index}`}
                                                                >
                                                                    <li><span>Street: </span><p>{a.street}</p></li>
                                                                    <li><span>City: </span><p>{a.city}</p></li>
                                                                    <li><span>State: </span><p>{a.state}</p></li>
                                                                    <li><span>Zip code: </span><p>{a.zip}</p></li>
                                                                </section>
                                                            </div>
                                                        </section>
                                                    )
                                                })
                                            }
                                        </div>
                                        : dashCtx.getAction().actionType === 'editAddress' ?
                                        <AddressForm title='Update Address' btnText='Update'/>
                                        : <AddressForm title='New Address' btnText='Submit'/>
                                }

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}