import {FormProps} from "../../interface/interface";
import React, {useContext} from "react";
import {FormContext} from "../../setup/context/Context";

export const MajorForm = (prop: FormProps) => {
    const {setName, setDescription} = useContext(FormContext)
    const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const formIsValid = (event: any) => {

    }

    return (
        <div className={`form-container`}>
            <div className="title-container">
                <h2>{prop.title}</h2>
            </div>
            <form action=""
                  onSubmit={onSubmit}
                  className="form md:w-full lg:w-1/2 lg:m-auto">
                <div className="form-group lg:w-full">
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder={`Enter major name`}
                    />
                </div>
                <div className="form-group lg:w-full">
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={`Enter major description`} />
                </div>
                <div className="form-group lg:w-full">
                    <input type="submit" value={prop.btnText}/>
                </div>
            </form>
        </div>
    )
}


