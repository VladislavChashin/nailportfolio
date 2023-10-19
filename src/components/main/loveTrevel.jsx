import loveTrevelData from '../data/loveTrevelData'
import './style/loveTrevel.scss'


export default function LoveTrevel(){
    return( 
        <div className="loveTrevel wow animate__animated animate__fadeIn animate__slowe">
            <span></span>
            <div className="loveTrevel_content">
                <div className="content_description">
                    <p>🌎 Люблю путешествия</p>
                </div>
                <div className="content_countres">
                    <p>Страны, которые посетил я посетил и планирую посетить!</p>
                    <div className="countres_grid">
                        {loveTrevelData.map(array => 
                            <div className='countre'> 
                                <img src={array.flag} alt="" />
                                <p key={array.id}>{array.countre} 
                                    <img src={array.img} alt="" /> 
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}