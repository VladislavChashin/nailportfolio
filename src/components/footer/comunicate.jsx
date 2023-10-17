import strelka from '../../source/images/footer/strelka.svg'
import tg from '../../source/images/footer/tg.svg'
import vk from '../../source/images/footer/vk.png'
import email from '../../source/images/footer/mail.png'
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
                            <a href="https://t.me/nyakubaliev"  target="_blank" rel="noreferrer"><img src={tg} alt="" /></a>
                        </div>
                        <div>
                            <a href="https://vk.me/nail_yakubaliev"  target="_blank" rel="noreferrer"><img src={vk} alt="" /></a>
                        </div>
                        <div>
                            <a href="mailto:nail-0505@mail.ru" style={{filter: 'invert(1)'}} target="_blank" rel="noreferrer"><img src={email} alt="" /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}