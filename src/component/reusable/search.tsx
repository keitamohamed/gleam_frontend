import React, {ChangeEvent, useState} from "react";

export const Search = () => {
    const [prop, setProps] = useState<{type: string, search: string}>({
        type: '',
        search: ''
    })

    const isInputNum = (input: any) => {
        return !isNaN(input)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProps({
            ...prop,
            search: event.target.value
        })
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isInputNum(prop.search)) {
            console.log('It is a number')
        } else {
            console.log('It is not number')
        }

    }

    return (
        <>
            <div className="dropdown-select col-span-2">
            </div>
            <div className="form-container col-start-3 col-end-7">
                <form action="" 
                      className="form"
                      onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="search"
                            onChange={(event) => onChange(event)}
                            placeholder={`Search course by id or name`} />
                    </div>
                </form>
            </div>
        </>
    )
}