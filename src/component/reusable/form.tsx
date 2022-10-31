import {useAppDispatch, useAppStore} from "../../setup/academy/useReduxHook";
import {FormProps} from "../../interface/interface"
import {useTeacher} from "../../hook/useTeacher";
import {teacherAction} from "../../setup/academy/teacher_slice";

export const AddressForm = (pros: FormProps) => {
    const dispatch = useAppDispatch()
    const {teacher, address, message} = useAppStore((state) => state.teacher)
    const {newAddress, updateAddress, findTeacherByID} = useTeacher()

    const onChange = (event: any) => {
        dispatch(teacherAction.onChangeAddress(event.target))
    }

    const onSubmit = async (event: any) => {
        event.preventDefault()
        pros.btnText === 'Submit' ? (newAddress()) : (await updateAddress())
    }

    return (
        <div className="form-container sm:w-full md:w-4/5">
            <div className="title-container">
                <h3>{pros.title}</h3>
            </div>
            <form action=""
                  onSubmit={onSubmit}
                  className="form">
                <div className="form-group">
                    <input type="text"
                           name='street'
                           placeholder={`Enter street address ${pros.btnText === 'Update' ? `( ${address.street} )` : ''}`}
                           onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="text"
                           name='city'
                           placeholder={`Enter city ${pros.btnText === 'Update' ? `( ${address.city} )` : ''}`}
                           onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="text"
                           name='state'
                           placeholder={`Enter state ${pros.btnText === 'Update' ? `( ${address.state} ) ` : ''}`}
                           onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="text"
                           name='zip'
                           placeholder={`Enter zip code ${pros.btnText === 'Update' ? `( ${address.zip} ) ` : ''}`}
                           onChange={onChange}/>
                </div>
                {
                    message.message ? (<div className="form-group message">
                        <p>{message.message ? message.message : ''}</p>
                    </div>) : ''
                }
                <div className="form-group">
                    <input type="submit" value={pros.btnText}/>
                </div>

            </form>
        </div>
    )
}