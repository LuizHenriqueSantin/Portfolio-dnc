import "./card.css"

function Card ({icon, text, lnk}){
    return(
        <a href={lnk} target="_blank" className="link-card" rel="noreferrer">
            <div className="container-card">
                <img src={icon} alt="ERROR"/>
                <p>{text}</p>
            </div>
        </a>
    )
}

export default Card