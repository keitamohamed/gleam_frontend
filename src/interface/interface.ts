import { ReactNode } from "react";

export interface Props {
    children?: ReactNode
}

export interface DashboardStateProps {
    displayName?: string;
    actionType?: string;
    show: boolean
}

export interface DashboardProperty {
    getAction: () => DashboardStateProps,
    setDisplayName: (prop: string) => void,
    setActionProp: (props: DashboardStateProps) => void,
    setActionType: (action: string) => void
}

export interface FormProps {
    title?: string
    btnText?: string
    actionType?: string
    action?: string
}

export interface CardProps {
    id?: number
    name?: string,
    description?: string,
    credit?: number
}

interface Major {
    majorID?: number,
    name?: string,
    description?: string,
    subjects?: Subject
}

interface Subject {
    subjectID?: number,
    name?: string,
    description?: string,
    credit?: number
    courses?: Course[]
}

export interface Course {
    id?: number,
    name?: string,
    description?: string,
    credit?: number;
}

export interface AcademicProperty {
    major?: Major,
    majors?: Major[],
    subject?: Subject,
    subjects?: Subject[],
    course?: Course,
    courses?: Course[],
}

