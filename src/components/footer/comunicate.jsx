import strelka from '../../source/images/footer/strelka.svg'
import tg from '../../source/images/footer/tg.svg'
import vk from '../../source/images/footer/vk.png'
import './style/comunicate.scss'

export default function Comunicate(){
    return(
        <>
            <div className="comunicate" id="comunicate">
                <div className="comunicate_content">
                    <div className="text">
                        <p>Если Вы заинтересовались моей кандидатурой прошу Вас связаться удобным для Вас способом</p>
                        <img src={strelka} alt="" />
                    </div>
                    <div className="icons">
                        <div>
                            <img src={tg} alt="" />
                        </div>
                        <div>
                            <img src={vk} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}