import './style/education.scss'
import plus from '../../source/images/main/plus.svg'
import { useState } from 'react'

export default function Dropdown(props){
    return(
        <>
            <div className={`dropdown ${props.class}`} id={props.class}>
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
        <div className="dropdown_block" onClick={()=> setDrop(prev => !prev)}>
            <div className="dropdown_block_text">
                <p>{props.title}</p> <img src={plus} alt="" />
            </div>
            {props.description === undefined || drop === false ? <></>: 
                <div className="dropdown_block_droped" >
                    <div className="tag_block">
                        <p className='tag'>{props.description.post}</p>
                        <p className='tag'>{props.description.time}</p>
                    </div>
                    <div className="content">
                        <p>{props.description.pred_text}</p>
                        <div className="duties">
                            <p>Обязаности: </p>
                            <ol>
                                {props.description.duties.map((arr, idx) => <li key={idx} >{arr}</li> )}
                            </ol>
                        </div>
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
                    </div>
                </div>
            }
        </div>
    )
}