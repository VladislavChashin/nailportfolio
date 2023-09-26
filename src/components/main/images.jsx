import './style/images.scss'
import play from '../../source/images/main/play1.svg'
import {useState, useCallback} from 'react'

export default function Images(props){
    const[open, setOpen] =  useState(false)
    const [data, setData] =useState(0)
    const lockScroll = useCallback((l) => {
        if (l === true){
            document.body.style.overflow = ""
        }else{
            document.body.style.overflow = "hidden"
        }
            
        }, [])
    return(
        <div className={`images ${props.class}` } id={props.class}>
            <div className="images_tag">
                <p className="tag">{props.tag}</p>
            </div>
            <div className="images_content">
                <div className="content_description">
                    <p>{props.description}</p>
                </div>
                { props.type === 'video'?
                    <div className={`content_img ${props.class}`}>
                        {props.data.map(array =>
                        <>
                            <div className={`video item-${array.id}`} onClick={() => {setOpen(prev => !prev); setData(array); lockScroll(open)}}>
                                <img src={array.poster} alt="nail" key={array.id} /> 
                                <img className="play" src={play} alt="" />
                            </div>   
                        </>   
                        )}
                        {open === true ? 
                            <div className='video_open' onClick={() => {setOpen(prev => !prev); lockScroll(open)}}>
                                <video autoPlay controls poster={data.poster}>
                                    <source src={data.src} type="video/mp4" />
                                </video>
                            </div>
                            :<></>
                        }
                    </div>
                    
                    :

                    <div className={`content_img ${props.class}`}>
                        {props.data.map(array => <img className={`item-${array.id}`} src={array.src} alt="nail" key={array.id} /> )}
                    </div>
                }
            </div>
        </div>
    )
}