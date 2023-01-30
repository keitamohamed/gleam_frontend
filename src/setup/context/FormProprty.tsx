import {useState} from "react";

import {MajorStateForm, Props} from '../../interface/interface'
import {FormContext} from './Context'

const {Provider} = FormContext

export const FormContextProvider = ({children}: Props) => {
    const [state, setState] = useState<MajorStateForm>({
        name: '',
        description: ''
    })

    const getFormValue = () => {
        return state
    }

    const setName = (props: string) => {
        setState({
            ...state,
            name: props
        })
    }
    const setDescription = (props: string) => {
        setState({
            ...state,
            description: props
        })
    }

    const setFormValue = (prop: MajorStateForm) => {
        setState({
            ...state,
            name: prop.name,
            description: prop.description
        })
    }

    return (
        <Provider value={{
            getFormValue,
            setFormValue,
            setName,
            setDescription
        }}>
            {children}
        </Provider>
    )
}