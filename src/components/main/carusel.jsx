
import Swiper from 'react-id-swiper';
import 'swiper/css';
import './style/curses.scss'

export default function Carusel(props){
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            841: {
                slidesPerView: props.arr,
            },
            1440: {
                slidesPerView: props.arr + 0.7,
            }
        }
        
      };

    return(
        <>
            <div className={`curses ${props.class}`}>
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