import {SideNave} from "../reusable/SideNave";
import {useContext} from "react";
import {DashboardContext} from "../../setup/context/Context";

import {Card} from "../reusable/course_card";
import {Teacher_Profile} from "../sup_page/teacher_profile";
import {useTeacher} from "../../hook/useTeacher";
import {useAppDispatch, useAppStore} from "../../setup/academy/useReduxHook";

export const Teacher = () => {
    const {} = useTeacher()
    const dash = useContext(DashboardContext)
    const {courses} = useAppStore((state) => state.teacher)

    return (
        <div className={"teacher_layout sm:space-y-2 sm:space-x-2 md:h-screen md:grid md:grid-cols-9"}>
            <SideNave/>
            <div className="main grid grid-cols-2 md:grid-cols-3
            md:col-span-6 justify-center sm:mt-2 gap-1">
                {
                    dash.getAction().displayName == 'account' ?
                        <Teacher_Profile />
                        :
                        dash.getAction().displayName == 'dashboard' ?
                            courses.map((course, index) => {
                                return <Card
                                    key={`${course.id}_${index}`}
                                    id={course.id}
                                    name={course.name}
                                    description={course.description}
                                    credit={course.credit}  />
                            })
                        : <h1>H1 value</h1>
                }
            </div>
            <div className="right-side-nav w-full">
                <h1>Right container</h1>
            </div>
        </div>
    )
}