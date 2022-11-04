import {useContext, useEffect} from "react";

import {useAppStore} from "../../setup/academy/useReduxHook";
import {DashboardContext} from "../../setup/context/Context";
import {accordion} from "../../util/accordion";

export const Major = () => {
    const dashCtx = useContext(DashboardContext)
    const {major} = useAppStore((state) => state.academics)

    const setActionType = () => {
        dashCtx.setActionType('')
    }

    useEffect(() => {
        accordion()
    }, [])

    return(
        <div className='major'>
            <div className="title_container">
                <h2>{major?.name}</h2>
            </div>
            <div className="layout grid grid-cols-12 gap-2">
                <div className="sidenav col-span-4">
                    <h2>This is a side nav</h2>
                </div>
                <div className="accordion col-span-8">
                    <div className="accordion-tabs !grid-cols-2">
                        <li className="accordion-tab" data-actab-id='1' onClick={setActionType}>Overview</li>
                        <li className="accordion-tab" data-actab-id='2' onClick={setActionType}>Requirements</li>
                    </div>
                    <div className="accordion-content">
                        <section className="tab-section" data-actab-id='1'>
                            <div className="description">
                                {major?.description}
                            </div>
                        </section>
                        <section className="tab-section" data-actab-id='2'>
                            <h1>Tab 2</h1>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}