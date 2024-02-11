import "./skills.css"
import javascript from "../../assets/javascript.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import react from "../../assets/react.svg"
import typescript from "../../assets/typescript.svg"

function Skills(){
    return(
        <div className="container" id="skills">
            <div className="skills">
                <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div className="cards">
                    <img title="JavaScript" alt="ERROR" src={javascript}/>
                    <img title="HTML" alt="ERROR" src={html}/>
                    <img title="CSS" alt="ERROR" src={css}/>
                    <img title="React" alt="ERROR" src={react}/>
                    <img title="TypeScript" alt="ERROR" src={typescript}/>
                </div>        
            </div>
        </div>
    )
}

export default Skills;