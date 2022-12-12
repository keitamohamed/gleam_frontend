import {AdminDashboardContext} from "./Context";
import {DashboardStateProps, Props} from "../../interface/interface";
import {useState} from "react";


const {Provider} = AdminDashboardContext

export const AdminDashboardProvider = ({children}: Props) => {

    const [action, setAction] = useState<DashboardStateProps>({
        displayName: 'dashboard',
        actionType: '',
        show: false
    })

    const getAction = () => {
        return action
    }

    const setActionProp = (props: DashboardStateProps) => {

    }
    const setDisplayName = (prop: string) => {
        console.log(prop)
        setAction({
            ...action,
            displayName: prop
        })
    }
    const setActionType = (prop: string) => {
        setAction({
            ...action,
            actionType: prop,
        })
    }

    return (
        <Provider value={{
            getAction,
            setDisplayName,
            setActionProp,
            setActionType
        }}>
            {children}
        </Provider>
    )
}