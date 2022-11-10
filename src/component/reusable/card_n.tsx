
export const Card = (props: {text: string, data: number}) => {

    return (
        <div className="card">
            <h1><span>{props.text}</span>{props.data}</h1>
        </div>
    )
}