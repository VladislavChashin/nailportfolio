import './style/images.scss'


export default function Images(props){
    return(
        <div className={`images ${props.class}`}>
            <div className="images_tag">
                <p className="tag">{props.tag}</p>
            </div>
            <div className="images_content">
                <div className="content_description">
                    <p>{props.description}</p>
                </div>
                <div className={`content_img ${props.class}`}>
                    {props.data.map(array => <img className={`item-${array.id}`} src={array.src} alt="nail" key={array.id} /> )}
                </div>
            </div>
        </div>
    )
}