import {useNavigate} from 'react-router-dom'
import {RiDashboardFill} from "react-icons/ri";
import {GoBook, GoCalendar} from "react-icons/go";
import {BsPeopleFill} from "react-icons/bs";
import {FiInbox} from "react-icons/fi";

import photo from "/src/assets/image/photo.jpg"
import {useContext} from "react";
import {DashboardContext} from "../../setup/context/Context";

export const SideNave = () => {
    const nav = useNavigate()
    const dash = useContext(DashboardContext)

    return (
        // md:h-screen grid md:col-start-1 md:col-end-2  md:pt-2
        <div className="side-nav md:h-screen md:col-start-1 md:col-end-2 md:pt-2">
            {/*md:grid sm:flex md:grid-cols-1 sm:justify-evenly  sm:pl-1 sm:pr-2*/}
            <div className="list_container flex md:grid sm:justify-evenly sm:pl-2 sm:pr-2">
                <li className={"round_image w-full"}
                    onClick={
                        () => nav("/teacher/profile")}
                >
                    <img
                        className={"md:w-48 rounded-full mx-auto"}
                        src={photo}
                        alt="image"
                    />
                    <span>Account</span>
                </li>
                <li className="w-full"
                    onClick={
                    () => dash.setActionType("dashboard")}
                >
                    <RiDashboardFill/>
                    <span>Dashboard</span>
                </li>
                <li className="w-full"
                    onClick={
                    () => dash.setActionType("courses")}
                >
                    <GoBook/>
                    <span>Courses</span>
                </li>
                <li className="w-full"
                    onClick={
                    () => dash.setActionType("group")}
                >
                    <BsPeopleFill/>
                    <span>Groups</span>
                </li>
                <li className="w-full"
                    onClick={
                    () => dash.setActionType("calendar")}
                >
                    <GoCalendar/>
                    <span>Calendar</span>
                </li>
                <li className="w-full"
                    onClick={
                    () => dash.setActionType("inbox")}
                >
                    <FiInbox/>
                    <span>Inbox</span>
                </li>
            </div>
        </div>
    )
}