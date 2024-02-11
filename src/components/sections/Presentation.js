import Btn from '../elements/Btn.js';
import styles from './presentation.module.css'
import { useEffect, useState } from 'react';

function Presentation(){
    const [txt, setTxt] = useState('');
    const toRotate = ["o Luiz Henrique! ", "Desenvolvedor FullStack! "];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return() => {clearInterval(ticker)}
    }, [txt])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,txt.length-1) : fullText.substring(0,txt.length+1)
        
        setTxt(updatedText);

        if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoop(loop+1);
            setDelta(100)
        }
        else if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(75);
        }
    }

    return(
        <div className={styles.presentation} id='presentation'>
            <strong>Bem vindo ao meu portifólio</strong>
            <h1>Olá, eu sou {txt}</h1>
            <p>Sou um apaixonado por texnologia e solucões inovadoras. Como Desenvolvedor FullStack, eu tenho o compromisso de resolver problemas complexos e trazer resultados exepcionais para os negócios. Meus projetos já geraram milhões de reais em receita anual e estou sempre em busca de novos desafios para superar.</p>
            <br/>
            <Btn text="Conecte-se comigo" on="pres" link="https://github.com/LuizHenriqueSantin"></Btn>
        </div>
    )
}

export default Presentation;