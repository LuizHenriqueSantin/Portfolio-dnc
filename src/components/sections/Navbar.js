import styles from './navbar.module.css'
import { AiFillLinkedin, AiFillMail, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a target='_blank' href='https://www.linkedin.com/in/luiz-henrique-rafaeli-santin-8829482a3/' rel="noreferrer"><AiFillLinkedin size={30}/></a></li>
                <li><a target='_blank' href="mailto:luizhenriquersantin@gmail.com.br" rel="noreferrer"><AiFillMail size={30}/></a></li>
                <li><a target='_blank' href='https://wa.me/5549998358195' rel="noreferrer"><AiOutlineWhatsApp size={30}/></a></li>
                <li><a target='_blank' href='https://github.com/LuizHenriqueSantin' rel="noreferrer"><AiFillGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar;