import Comunicate from "./comunicate";
import './style/footer.scss'

export default function Footer(){
    return(
        <footer>
            <Comunicate/>
            <div className="footer_content">
                <ul>
                    <li> <a href="">Обо мне</a> </li>
                    <li> <a href="">Карьера</a> </li>
                    <li> <a href="">Награды</a> </li>
                    <li> <a href="">Образование</a> </li>
                    <li> <a href="">Деятельность</a> </li>
                </ul>
                <h1>Наиль <span>Якубалиев</span></h1>
            </div>
        </footer>
    )
}