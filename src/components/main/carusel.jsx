
import Swiper from 'react-id-swiper';
import 'swiper/css';
import './style/curses.scss'

export default function Carusel(props){
    const params = {
        // slidesPerView: 3,
      };

    return(
        <>
            <div className="curses">
                <div className="curses_tag">
                    <p className="tag">{props.tag}</p>
                </div>
                <div className="curses_content">
                    <div className="content_description">
                        <p>{props.description}</p>
                    </div>
                    <Swiper {...params}>
                        {props.data.map((item, idx) => (
                            <div  key={idx}>
                                <img src={item.img} alt="" />
                            </div>
                        ))}
                    </Swiper>
                </div>
                
            </div>
        </>
    )
}