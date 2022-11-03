import {useAppStore} from "../../setup/academy/useReduxHook";

export const Major = () => {
    const {major} = useAppStore((state) => state.academics)

    return(
        <div className='major'>
            <div className="title_container">
                <h2>{major?.name}</h2>
            </div>
            <div className="layout grid grid-cols-12 gap-2">
                <div className="sidenav col-span-4">
                    <h2>This is a side nav</h2>
                </div>
                <div className="main col-span-8">
                    <div className="accordion">
                        <li className="btn">Overview</li>
                        <li className="btn">Requirements</li>
                    </div>
                </div>
            </div>
        </div>
    )
}