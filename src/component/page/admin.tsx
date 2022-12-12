import {useContext, useEffect} from "react";

import {IoIosSchool} from 'react-icons/io'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {GrUserAdmin} from 'react-icons/gr'

import {useAppStore} from "../../setup/academy/useReduxHook";


import {SideNave} from "../reusable/SideNave";
import {Card} from "../reusable/card_n"

import {Table} from "../reusable/table";
import {Search} from "../reusable/search";
import {useAcademics} from "../../hook/useAcademics";
import {AdminDashboardContext, DashboardContext} from "../../setup/context/Context";
import {UserForm} from "../form/user-form";
import {MajorForm} from "../form/major-form";

export const Admin = () => {
    const adminCtx = useContext(AdminDashboardContext)
    // const dashCtx = useContext(DashboardContext)
    const {} = useAcademics()
    const {courses} = useAppStore((state) => state.academics)

    useEffect(() => {

    }, [adminCtx])
    return (
        <div className={`admin`}>
            <div className="layout grid md:grid-cols-12">
                <SideNave setDisplayName={() => adminCtx.setDisplayName('dashboard')}/>
                <div className="main md:col-span-11">
                    <div className="content w-full">
                        <div className="content-top sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <Card text={'Total Teachers:'} data={5698}/>
                            <Card text={'Total Teachers:'} data={238}/>
                            <Card text={'Total Admin:'} data={422}/>
                        </div>
                        <div className="main pt-2 pb-2 mt-2">
                            {
                                adminCtx.getAction().displayName == "dashboard" ? (
                                    <div className="dash_content_container">
                                        <div className="btn-container grid grid-cols-4 w-1/2">
                                            <li onClick={() => adminCtx.setDisplayName('Teacher Form')}><AiOutlineUserAdd/> <span>Teacher</span></li>
                                            <li onClick={() => adminCtx.setDisplayName('Student Form')}><AiOutlineUserAdd/> <span>Student</span></li>
                                            <li onClick={() => adminCtx.setDisplayName('Admin Form')}><GrUserAdmin/> <span>Admin</span></li>
                                            <li onClick={() => adminCtx.setDisplayName('Major Form')}><IoIosSchool/> <span>Major</span></li>
                                        </div>
                                        <div className="search-container">
                                            <div className="layout grid grid-cols-6">
                                                <Search/>
                                            </div>
                                        </div>
                                        <Table courses={[{}]} header={''} />
                                    </div>
                                ) : adminCtx.getAction().displayName == "Teacher Form" ?
                                    <UserForm title={'New Teacher Form'} />
                                    : adminCtx.getAction().displayName == "Student Form" ?
                                    <UserForm title={'New Student Form'}/>
                                    : adminCtx.getAction().displayName == "Admin Form" ?
                                    <UserForm title={'New Admin Form'} />
                                    : adminCtx.getAction().displayName == "Major Form" ?
                                    <MajorForm title={'New Major Form'}/>
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}