import './style/index.scss'
import menu from '../../source/images/header/Menu.svg'
import HamburgerMenu from './hemburgerMenu'
export default function Header(){
    return(
        <header>
            <div className="header_content ">
                <nav>
                    <HamburgerMenu/>
                </nav>
                <div className="header_description wow animate__animated animate__fadeIn animate__slower">
                    
                    <h1>Наиль Якубалиев</h1>
                </div>
            </div>
            
        </header>
    )
}