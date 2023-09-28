
import Swiper from 'react-id-swiper';
import 'swiper/css';
import './style/curses.scss'
import { useState, useCallback, useEffect } from 'react';

export default function Carusel(props){
    const[open, setOpen] =  useState(false)
    const [data, setData] =useState(0)
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        
        const handleResize = (event) => {
          setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      }, []);


    const lockScroll = useCallback((l) => {
        if (l === true){
            document.body.style.overflow = ""
        }else{
            document.body.style.overflow = "hidden"
        }
            
        }, [])

    const params = {
        slidesPerView: 1.2,
        spaceBetween: 30,
        slidesOffsetBefore: 190,
        breakpoints: {
            310: {
                slidesOffsetBefore: 20,
            },
            500: {
                slidesPerView: props.arr ,
                slidesOffsetBefore: 20,
            },
            841: {
                slidesPerView: props.arr,
                slidesOffsetBefore: 80,
            },
            1024: {
                slidesPerView: props.arr + 0.7,
                slidesOffsetBefore: 100,
            },
            1440: {
                slidesPerView: props.arr + 1.7,
                slidesOffsetBefore: 140,
            },
        },
        
        
      };

    return(
        <>  
            <div className={`curses ${props.class} wow animate__animated animate__fadeIn animate__slowe`} id={props.class}>
                <div className="curses_tag">
                    <p className="tag">{props.tag}</p>
                    <div className="content_description">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="curses_content">
                <Swiper {...params}>
                        {props.data.map((item, idx) => (
                            <div  key={idx} className="wow animate__animated animate__fadeIn animate__slowe">
                                <img src={item.img} alt="" onClick={() => {setOpen(prev => !prev); setData(item.img); lockScroll(open)}}/>
                            </div>
                        ))}
                </Swiper>
                    {open === true ? 
                        <div className='img_open animate__animated animate__fadeIn animate__slowe' onClick={() => {setOpen(prev => !prev); lockScroll(open)}}>
                            <img src={data} alt="" />
                        </div>
                        :<></>
                    }
                </div>
                
            </div>
        </>
    )
}