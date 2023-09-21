import AboutUs from "./aboutUs";
import Education from "./education";
import Images from "./images";
import LoveTrevel from "./loveTrevel";
import './style/main.scss'

export default function Main(){
    return(
        <main>
            <AboutUs/>
            <Education/>
            <Images/>
            <LoveTrevel/>
        </main>
    )
}