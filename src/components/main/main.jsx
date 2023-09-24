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
        <main>
            <AboutUs/>
            <Dropdown data={education} 
                        tag={'ОБРАЗОВАНИЕ'}     
                        description={'Имею высшее образование в различных направлениях, что позволяет использовать вертолетный взгляд на бизнес, проекты'}/>
            <Images className="images_one"
                    data={imagesData} 
                    tag={'ХОББИ'}
                    description = {'Веду активный образ жизни'}/>
            <LoveTrevel/>
            {/* <Carusel data = {curseData}
                    tag ={'КУРСЫ'}
                    description={'Уделяю внимание личному и профессиональному саморазвитию'}/> */}
            <Dropdown data={carier} 
                        tag={'КАРЬЕРА'}     
                        description={'Получил опыт на различных проектах, крутую команду и яркие эмоции'}/>
            <Competence/>
            <Images class="images_two"
                    data={imagesDataTwo} 
                    tag={'ДЕЯТЕЛЬНОСТЬ'}
                    description = {'Веду активный образ жизни'}/>
            {/* <Carusel data = {blagodarData}
                    tag ={'БЛАГОДАРНОСТИ'}
                    description={'Благодарность - следствие хорошей работы'}/> */}
        </main>
    )
}