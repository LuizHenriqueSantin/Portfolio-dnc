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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <Btn text="Conecte-se comigo" on="pres" link="https://github.com/LuizHenriqueSantin"></Btn>
        </div>
    )
}

export default Presentation;