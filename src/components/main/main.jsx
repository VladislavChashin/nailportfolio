import AboutUs from "./aboutUs";
import Carusel from "./carusel";
import Dropdown from "./dropdown";
import Images from "./images";
import LoveTrevel from "./loveTrevel";
import './style/main.scss'
import {education, carier} from '../data/dropdownData'
import Competence from "./competence";
import {imagesData, imagesDataTwo} from "../data/imagesData"
import {curseData, blagodarData} from '../data/courseData'

export default function Main(){
    return(
        <>
        <main>
            <AboutUs/>
            <Dropdown data={education} 
                        tag={'ОБРАЗОВАНИЕ'}
                        class = 'obraz'      
                        description={'Имею высшее образование в различных направлениях, что позволяет использовать вертолетный взгляд на бизнес-проекты'}/>
            <Dropdown data={carier} 
                        tag={'КАРЬЕРА'}  
                        class = 'carier'  
                        description={'Получил опыт на различных проектах, крутую команду и яркие эмоции'}/>
        </main>
            <Carusel data = {curseData}
                    class = 'carusel_one'
                    tag ={'КУРСЫ'}
                    arr = {2.8}    
                    description={'Уделяю внимание личному и профессиональному саморазвитию'}/>
        <main>
            
            <Competence/>
            <Images class="images_one"
                    data={imagesData} 
                    tag={'ХОББИ'}
                    description = {'Веду активный образ жизни'}/>
            <LoveTrevel/>
            <Images class="images_two"
                    data={imagesDataTwo} 
                    tag={'ДЕЯТЕЛЬНОСТЬ'}
                    type={'video'}
                    description = {'Помог осуществить ряд крупных и уникальных проектов'}/>
        </main>
        <Carusel data = {blagodarData}
                class = 'carusel_two'
                arr = {4.3}    
                tag ={'БЛАГОДАРНОСТИ'}
                description={'Благодарность - следствие хорошей работы'}/>
        </>
    )
}