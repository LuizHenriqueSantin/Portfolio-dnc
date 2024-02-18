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
            <Card lnk="https://desafio3-iota.vercel.app" icon={card1} text="Projeto de site para organizaçao de tarefas diárias, sendo possivel adiconar, editar e excluir tarefas, e contendo contador de progresso em tarefas concluídas"/>
            <Card lnk="https://regal-muffin-b4cd4a.netlify.app" icon={card2} text="Desafio de landing page desenvolvido para avaliação no curso de formação em tecnologia da escola DNC, utilizando HTML e CSS"/>
            <Card lnk="https://thebatman-six.vercel.app" icon={card3} text="Projeto de site simulando a venda de ingressos para o filme The Batman, com trailer, imagens, simulador de comentários e informações sobre os atores principais. Desenvolvido por meio do ReactJS"/>
            <Btn2 lk="https://github.com/LuizHenriqueSantin" text="Ver repositório completo completo!"/>
        </div>
    )
}

export default Projects;