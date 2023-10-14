import './style/education.scss'
import plus from '../../source/images/main/plus.svg'
import { useState } from 'react'

export default function Dropdown(props){
    return(
        <>
            <div className={`dropdown ${props.class} wow animate__animated animate__fadeIn animate__slowe`} id={props.class}>
                <div className="dropdown_tag">
                    <p className="tag">{props.tag}</p>
                </div>
                <div className="dropdown_content">
                    <div className="content_description">
                        <p>{props.description}</p>
                    </div>
                    <div className="content_dropdown">
                        {props.data.map(array => <DropdownBlocks props={array} key={array.id}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

function DropdownBlocks({props}){
    const[drop, setDrop] = useState(false)
    return(
        <div className="dropdown_block wow animate__animated animate__fadeIn animate__slowe" onClick={()=> setDrop(prev => !prev)}>
            <div className="dropdown_block_text">
                {props.image === undefined ? <p>{props.title}</p>:
                <div className="dropdown_block_text_icon"><img src={props.image} alt="" /><p>{props.title}</p></div> 
                }
                <img src={plus} alt="" className={drop === true ? 'active' : 'noActive'}/>
            </div>
            {props.description === undefined || drop === false ? <></>: 
                <div className="dropdown_block_droped wow animate__animated animate__fadeIn" >
                    <div className="tag_block">
                        <p className={props.description.content === true ? 'tag' : 'tag edu'}>{props.description.post}</p>
                        <p className={props.description.content === true ? 'tag' : 'tag edu'}>{props.description.time}</p>
                    </div>
                    {props.description.content === true ? <div className="content">
                        <p>{props.description.pred_text}</p>
                        {props.description.duties === undefined ? <></>:
                        <div className="duties">
                            <p>Обязаности: </p>
                            <ol>
                                {props.description.duties.map((arr, idx) => <li key={idx} >{arr}</li> )}
                            </ol>
                        </div>}
                        {props.description.achievements === undefined ? <></>:
                            <div className="achievements">
                                <p>Достижения: </p>
                                <ol>
                                    {props.description.achievements.map((arr, idx) => <li key={idx} >{arr}</li> )}
                                </ol>
                            </div>
                        }
                        {props.description.SMI === undefined ? <></>:
                            <div className="achievements">
                                <p>Упоминяния в СМИ: </p>
                                <ol>
                                    {props.description.SMI.map((arr, idx) => <li key={idx} >{arr}</li> )}
                                </ol>
                            </div>
                        }
                    </div>: <></>}
                </div>
            }
        </div>
    )
}