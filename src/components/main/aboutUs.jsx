import './style/aboutUs.scss'
import nail from '../../source/images/main/nail.png'
export default function(){
    return(
        <>
            <div className="aboutUs wow animate__animated animate__fadeIn animate__slower" id='about'>
                <div className="aboutUs_tags">
                    <p className="tag">О СЕБЕ</p>
                </div>
                <div className="aboutUs_content">
                    <div className="content_description">
                        <p>
                            Всем привет! Меня зовут Якубалиев Наиль,<br /> 
                        я Ваш проводник в мир корпоративного <br />
                        спорта и крутых культурно-массовых<br /> 
                        мероприятий.
                        </p>
                
                        <p>
                            В свободное время от работы занимаюсь <br />
                        общественной деятельностью, являюсь <br /> 
                        руководителем региональных спортивных<br /> 
                        федераций, провожу мероприятия, <br />
                        семинары по спортивному менеджменту.
                        </p>
                    
                        <p>
                            Победитель грантов Мэра г. Москвы<br /> 
                        2022-2023, выпускник Президентской<br /> 
                        программы управленческих кадров <br />
                        РЭУ им. Г.В .Плеханова
                        </p>                          
                    </div>
                    <div className="content_image">
                        <img src={nail} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}