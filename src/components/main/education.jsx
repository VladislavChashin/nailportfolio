import education from '../data/educationData'
import './style/education.scss'
import plus from '../../source/images/main/plus.svg'

export default function(){
    return(
        <>
            <div className="education">
                <div className="education_tag">
                    <p className="tag">ОБРАЗОВАНИЕ</p>
                </div>
                <div className="education_content">
                    <div className="content_description">
                        <p>Имею высшее образование в различных направлениях, что позволяет использовать вертолетный взгляд на бизнес, проекты</p>
                    </div>
                    <div className="content_dropdown">
                        {education.map(array => <DropdownBlocks props={array} key={array.id}/>)}
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