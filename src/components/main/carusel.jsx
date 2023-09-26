
import Swiper from 'react-id-swiper';
import 'swiper/css';
import './style/curses.scss'
import { useState, useCallback } from 'react';

export default function Carusel(props){
    const[open, setOpen] =  useState(false)
    const [data, setData] =useState(0)
    const lockScroll = useCallback((l) => {
        if (l === true){
            document.body.style.overflow = ""
        }else{
            document.body.style.overflow = "hidden"
        }
            
        }, [])

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
            <div className={`curses ${props.class}`} id={props.class}>
                <div className="curses_tag">
                    <p className="tag">{props.tag}</p>
                </div>
                <div className="curses_content">
                    <div className="content_description">
                        <p>{props.description}</p>
                    </div>
                    <Swiper {...params} >
                        {props.data.map((item, idx) => (
                            <div  key={idx} className="wow animate__animated animate__fadeInRightBig">
                                <img src={item.img} alt="" onClick={() => {setOpen(prev => !prev); setData(item.img); lockScroll(open)}}/>
                            </div>
                        ))}
                    </Swiper>
                    {open === true ? 
                        <div className='img_open' onClick={() => {setOpen(prev => !prev); lockScroll(open)}}>
                            <img src={data} alt="" />
                        </div>
                        :<></>
                    }
                </div>
                
            </div>
        </>
    )
}