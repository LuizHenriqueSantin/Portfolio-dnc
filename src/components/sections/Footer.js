import "./footer.css"
import { AiFillLinkedin, AiFillMail, AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";

function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><a target='_blank' href='https://www.linkedin.com/in/luiz-henrique-rafaeli-santin-8829482a3/' rel="noreferrer"><AiFillLinkedin size={30}/></a></li>
                <li><a target='_blank' href="mailto:luizhenriquersantin@gmail.com.br" rel="noreferrer"><AiFillMail size={30}/></a></li>
                <li><a target='_blank' href='https://wa.me/5549998358195' rel="noreferrer"><AiOutlineWhatsApp size={30}/></a></li>
                <li><a target='_blank' href='https://github.com/LuizHenriqueSantin' rel="noreferrer"><AiFillGithub size={30}/></a></li>
            </ul>
            <p>Luiz Henrique Rafaeli Santin © 2024</p>
        </div>
    )
}

export default Footer;