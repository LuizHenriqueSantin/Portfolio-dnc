import "./button.css"

function Btn ({text, on, link}){

    return(
        <div>
            <a href={link} target='_blank' rel="noreferrer">
                <button className="btn" id={on}>{text}</button>
            </a>
        </div>
    )
}

export default Btn