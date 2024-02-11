import "./btn2.css"

function Btn2 ({text, on, lk}){

    return(
        <div>
            <a href={lk} target='_blank' rel="noreferrer">
                <button className="btn2" id={on}>{text}</button>
            </a>
        </div>
    )
}

export default Btn2