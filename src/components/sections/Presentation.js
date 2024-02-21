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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <p>Sou fascinado por tecnologia e soluçôes inovadoras.<br />Como desenvolvedor FullStack tenho a habilidade de desenvolver sistemas dinâmicos de fácil usabilidade para a resolução das necessidades dos clientes.<br/>Estou em constante evolução para aprimorar meus conhecimentos e habilidades na área, venho desenvolvendo projetos para pequenas empresas e para evolução pessoal.<br/>Segue abaixo um pouco do meu trabalho:</p>
            <br/>
            <Btn text="Conecte-se comigo" on="pres" link="https://github.com/LuizHenriqueSantin"></Btn>
        </div>
    )
}

export default Presentation;