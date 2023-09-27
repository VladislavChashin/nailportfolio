import { Link } from "react-scroll";
import Comunicate from "./comunicate";
import './style/footer.scss'

export default function Footer(){
    return(
        <footer className="animate__animated animate__fadeIn">
            <Comunicate/>
            <div className="footer_content" >
                <ul>
                    <li> <Link to="about" spy={true} smooth={true} duration = {1000} href="">Обо мне</Link> </li>
                    <li> <Link to="carier" spy={true} smooth={true} duration = {1000} href="">Карьера</Link> </li>
                    <li> <Link to="carusel_two" spy={true} smooth={true} duration = {1000} href="">Награды</Link> </li>
                    <li><Link to="carusel_one" spy={true} smooth={true} duration = {1000} offset={-100}  >Курсы</Link></li>
                    <li><Link to="images_one" spy={true} smooth={true} duration = {1000} offset={-100} >Хобби</Link></li>
                    <li> <Link to="obraz" spy={true} smooth={true} duration = {1000} href="">Образование</Link> </li>
                    <li> <Link to="images_two" spy={true} smooth={true} duration = {1000} href="">Деятельность</Link> </li>
                    <li><Link to="compen" spy={true} smooth={true} duration = {1000} offset={-100} >Компетенции</Link></li>
                </ul>
                <h1>Наиль <span>Якубалиев</span></h1>
            </div>
        </footer>
    )
}