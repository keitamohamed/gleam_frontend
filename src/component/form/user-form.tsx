import {UserFormProps} from "../../interface/interface";

export const UserForm = (props: UserFormProps) => {


    return (
        <div className='form-container'>
            <div className="title-container">
                <h2>{props.title}</h2>
            </div>
            <form action="" className='form md:w-full lg:w-1/2 lg:m-auto'>
                <div className="form-group">
                    <input type="text" placeholder={`Enter full name`}/>
                </div>
                <div className="form-group lg:w-full"><input type="text" placeholder={`Enter date of birth`}/></div>
                <div className="form-group lg:w-full"><input type="text" placeholder={`Enter gender`}/></div>
                <div className="form-group lg:w-full"><input type="text" placeholder={`Enter phone number`}/></div>
                <div className="form-group lg:w-full"><input type="submit"/></div>
            </form>
        </div>
    )
}