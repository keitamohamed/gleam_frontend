import {CardProps} from "../../interface/interface";

export const Card = (props: CardProps) => {

    return (
        <section className='card_c'>
            <div className="header">
                <li>{props.id}</li>
                <div className="container">
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className="main">
                <div className="body">
                    <p>{props.description}</p>
                    <li><span>Credit: </span>{props.credit}</li>
                </div>
            </div>
        </section>
    )
}