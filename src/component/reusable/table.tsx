interface Props {
}

export const Table = (props: {courses: any[], header: any}) => {

    const sum = (data: any[]) => {
        return data.reduce((accumulator, a) => accumulator + a, 0)
    }

    return (
        <div className={`table-container`}>
            <table className="table">
                <thead>
                <tr>
                    <td>{props.header.course}</td>
                    <td>{props.header.teacher}</td>
                    <td>{props.header.student}</td>
                </tr>
                </thead>
                <tbody>
                {
                    props.courses.map((course) => {
                        return <>
                            <tr key={course.id}><td>{course.name}</td></tr>
                            <tr key={course.id}><td>{sum(course.teachers)}</td></tr>
                            <tr key={course.id}><td>{}</td></tr>
                        </>
                    })
                }
                </tbody>
            </table>
        </div>
    )

}