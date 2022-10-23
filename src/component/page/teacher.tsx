import {SideNave} from "../reusable/SideNave";
import {useContext} from "react";
import {DashboardContext} from "../../setup/context/Context";

import {Card} from "../reusable/course_card";
import {Teacher_Profile} from "../sup_page/teacher_profile";
import {useTeacher} from "../../hook/useTeacher";

export const Teacher = () => {
    const dash = useContext(DashboardContext)
    const {} = useTeacher()

    return (
        // grid sm:flex md:grid-cols-9 gap-2 sm:space-y-2 sm:space-x-2
        <div className={"teacher_layout sm:space-y-2 sm:space-x-2 md:h-screen md:grid md:grid-cols-9"}>
            <SideNave/>
            {/*md:grid-cols-3 sm:grid-cols-1 md:col-span-6 sm:mt-2*/}
            <div className="main grid grid-cols-2 md:grid-cols-3
            md:col-span-6 justify-center place-items-center sm:mt-2 gap-2 p-2">
                {
                    dash.getAction().displayName == 'account' ?
                        <Teacher_Profile />
                        :
                        dash.getAction().displayName == 'dashboard' ?
                            <><Card/> <Card/></>
                        : <h1>H1 value</h1>
                }
            </div>
            <div className="right-side-nav w-full">
                <h1>Right container</h1>
            </div>
        </div>
    )
}