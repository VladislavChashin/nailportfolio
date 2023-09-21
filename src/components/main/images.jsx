import imagesData from "../data/imagesData"
import './style/images.scss'


export default function Images(){
    return(
        <div className="images">
            <div className="images_tag">
                <p className="tag">ХОББИ</p>
            </div>
            <div className="images_content">
                <div className="content_description">
                    <p>Веду активный образ жизни</p>
                </div>
                <div className="content_img">
                    {imagesData.map(array => <img className={`item-${array.id}`} src={array.src} alt="nail" key={array.id} /> )}
                </div>
            </div>
        </div>
    )
}