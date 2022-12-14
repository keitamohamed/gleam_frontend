import {HiSpeakerphone} from "react-icons/hi";
import {AiFillFileAdd, AiFillFolderAdd} from "react-icons/ai";
import {BsChatSquareText} from "react-icons/bs";
import {CardProps} from "../../interface/interface";
import {useState} from "react";

export const Card = (props: CardProps) => {
    const [isTrue, setIsTrue] = useState(true);

    return (
        <section className={`card ${isTrue ? '!h-auto' : 'h-full'}`}>
            <div className="header">
            </div>
            <div className="body">
                <div className="text_container">
                    <h2>{props.id}</h2>
                    <h5>{props.name}</h5>
                    <div className="main">
                        <p>{props.description}</p>
                    </div>
                    <li><span className='credit'>Credit: </span>{props.credit}</li>
                </div>
                <div className="icons">
                    <HiSpeakerphone/>
                    <AiFillFileAdd/>
                    <BsChatSquareText/>
                    <AiFillFolderAdd/>
                </div>
            </div>
        </section>
    )
}