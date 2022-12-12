import {Course} from "../../interface/interface";

interface Props {
}

export const Table = (props: {courses: Course[] | undefined, header: any}) => {


    const sum = (data: any[]) => {
        return data.reduce((accumulator, a) => accumulator + a, 0)
    }

    return (
        <div className={`table-container`}>
            <table className="table">
                <thead>
                <tr>
                    <td>Course</td>
                    <td>Teacher</td>
                    <td>Student</td>
                </tr>
                </thead>
                <tbody>
                {
                    props.courses?.map((course) => {
                        return <>
                            <tr>
                                <td>Survey of Accounting</td>
                                <td>6</td>
                                <td>267</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>6</td>
                                <td>267</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>6</td>
                                <td>267</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>6</td>
                                <td>267</td>
                            </tr>
                        </>
                    })
                }
                </tbody>
            </table>
        </div>
    )

}