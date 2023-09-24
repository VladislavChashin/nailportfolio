import './style/education.scss'
import plus from '../../source/images/main/plus.svg'

export default function Dropdown(props){
    return(
        <>
            <div className={`dropdown ${props.class}`}>
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
    return(
        <div className="dropdown_block">
            <p>{props.title}</p> <img src={plus} alt="" />
        </div>
    )
}