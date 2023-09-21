import './style/index.scss'
import menu from '../../source/images/header/Menu.svg'
export default function Header(){
    return(
        <header>
            <div className="header_content">
                <nav>
                    <img src={menu} alt="" />
                </nav>
                <div className="header_description">
                    <div className="description_tag">
                        <p className="tag">Руководитель отдела</p>
                        <p className="tag">Руководитель проекта</p>
                    </div>
                    <h1>Наиль Якубалиев</h1>
                </div>
            </div>
            
        </header>
    )
}