import {createContext} from "react";
import {DashboardProperty, DashboardStateProps, MajorStateForm, MajorFormProperty} from "../../interface/interface";

const adminDashboardProps: DashboardProperty = {
    getAction(): DashboardStateProps {
        return {
            displayName: '',
            show: false
        };
    },
    setActionProp(props: DashboardStateProps): void {},
    setActionType(action: string): void {},
    setDisplayName(prop: string): void {}

}

const dashboardProps: DashboardProperty = {
    getAction(): DashboardStateProps {
        return {
            displayName: '',
            show: false
        };
    },
    setDisplayName(prop: string): void {},
    setActionProp(props: DashboardStateProps): void {},
    setActionType(action: string): void {}
}

const formDashProperty: MajorFormProperty = {
    getFormValue(): MajorStateForm {
        return {
            name: '',
            description: ''
        };
    },
    setFormValue(prop: MajorStateForm): void {},
    setName(props: string): void {},
    setDescription(props: string): void {},
}

export const AdminDashboardContext = createContext(adminDashboardProps)
export const DashboardContext = createContext(dashboardProps)
export const FormContext = createContext(formDashProperty)
