import competenceData  from "../data/competenceData"
import './style/competence.scss'
export default function Competence(){
    return(
        <>
            <div className="competence">
                <div className="competence_tag">
                    <p className="tag">КОМПЕТЕНЦИИ</p>
                </div>
                <div className="competence_content">
                    <div className="content_description">
                        <p>Обладаю необходимыми компетенциями и навыками для реализации ваших идей</p>
                    </div>
                    <div className="content_content">
                        {competenceData.map(array => 
                            <div className="content_block" key={array.id}>
                                <img src={array.src} alt="" />
                                <p>{array.text}</p>
                            </div>
                        )}
                    </div>
                    <a href="">Связаться со мной</a>
                </div>
            </div>
        </>
    )
}