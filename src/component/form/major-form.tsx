import {FormProps} from "../../interface/interface";

export const MajorForm = (prop: FormProps) => {

    return (
        <div className={`form-container`}>
            <div className="title-container">
                <h2>{prop.title}</h2>
            </div>
            <form action="" className="form md:w-full lg:w-1/2 lg:m-auto">
                <div className="form-group lg:w-full">
                    <input type="text" placeholder={`Enter major name`}/>
                </div>
                <div className="form-group lg:w-full">
                    <textarea placeholder={`Enter major description`} />
                </div>
                <div className="form-group lg:w-full">
                    <input type="submit" value={prop.btnText}/>
                </div>
            </form>
        </div>
    )
}


