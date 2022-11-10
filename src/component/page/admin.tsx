import {SideNave} from "../reusable/SideNave";
import {Card} from "../reusable/card_n"

export const Admin = () => {


    return (
        <div className={`admin`}>
            <div className="layout grid md:grid-cols-12">
                <SideNave/>
                <div className="main md:col-span-11">
                    <div className="content w-full">
                        <div className="content-top sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <Card text={'Total Teachers:'} data={5698}/>
                            <Card text={'Total Teachers:'} data={238}/>
                            <Card text={'Total Admin:'} data={422}/>
                        </div>
                        <div className="main">
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}