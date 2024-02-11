import "./projects.css"
import Card from "../elements/Card";
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import Btn2 from "../elements/Btn2";

function Projects(){
    return(
        <div className="projects" id="projects">
            <h1>Projetos</h1>
            <Card lnk="https://jocular-croquembouche-96667d.netlify.app" icon={card1} text="Projeto de landing page desenvolvido juntamente ao curso de formação em tecnologia da escola DNC, utilizando HTML e CSS"/>
            <Card lnk="https://regal-muffin-b4cd4a.netlify.app" icon={card2} text="Desafio de landing page desenvolvido para avaliação no curso de formação em tecnologia da escola DNC, utilizando HTML e CSS"/>
            <Card lnk="https://capable-pasca-9d15be.netlify.app" icon={card3} text="Presente de aniversário de namoro para a minha namorada, contendo áudio, fotos, e uma contagem progressiva do tempo em que estamos juntos, desenvolvido utilizando JavaScript, HTML e CSS"/>
            <Btn2 lk="https://github.com/LuizHenriqueSantin" text="Ver repositório completo completo!"/>
        </div>
    )
}

export default Projects;