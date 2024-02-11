import Btn from '../elements/Btn.js';
import styles from './presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id='presentation'>
            <strong>Bem vindo ao meu portifólio</strong>
            <h1>Olá, eu sou Luiz Henrique</h1>
            <p>Sou um apaixonado por texnologia e solucões inovadoras. Como Desenvolvedor FullStack, eu tenho o compromisso de resolver problemas complexos e trazer resultados exepcionais para os negócios. Meus projetos já geraram milhões de reais em receita anual e estou sempre em busca de novos desafios para superar.</p>
            <br/>
            <Btn text="Conecte-se comigo" on="pres" link="https://github.com/LuizHenriqueSantin"></Btn>
        </div>
    )
}

export default Presentation;