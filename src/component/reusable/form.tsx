import {FormProps} from "../../interface/interface"
import {useAppStore} from "../../setup/academy/useReduxHook";

export const AddressForm = (pros: FormProps) => {
    const {address} = useAppStore((state) => state.teacher)
    return (
        <div className="form-container sm:w-full md:w-4/5">
            <div className="title-container">
                <h3>{pros.title}</h3>
            </div>
            <form action=""
                  className="form">
                <div className="form-group">
                    <input type="text"
                           placeholder={`Enter street address ${pros.btnText === 'Update' ? `( ${address.street} )` :  ''}`}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder={`Enter city ${pros.btnText === 'Update' ? `( ${address.city} )` : ''}`} /></div>
                <div className="form-group">
                    <input type="text" placeholder={`Enter state ${pros.btnText === 'Update' ? `( ${address.state} ) ` : ''}`}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder={`Enter zipcode: (old: ${''})`}/>
                </div>
                <div className="form-group">
                    <input type="submit" value={pros.btnText} />
                </div>

            </form>
        </div>
    )
}