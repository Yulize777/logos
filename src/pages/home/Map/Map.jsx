import React from 'react';
import {FiMail} from 'react-icons/fi'
import {BiMap} from 'react-icons/bi'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
const Map = () => {
    return (
        <section className={'map'}>
            <div className="map__block">
                <h2 className="map__title">
                    КОНТАКТЫ
                </h2>
                <hr/>
                <div className="map__address_main-cont">
                   <BiMap style={{fontSize: "40px",color: "#618967"}}/>
                    <div className="map__address__cont">
                        <p className="map__subtitle">
                            Наш адрес:
                        </p>
                        <h3 className="map__address-title">
                            МО, городской округ Красногорск, село Ильинкое, <br/>
                            Экспериментальная улица, 10
                        </h3>
                    </div>
                </div>
                <div className="map__address_main-cont">
                    <FiMail style={{fontSize: "40px",color: "#618967"}}/>
                    <div className="map__address__cont">
                        <p className="map__subtitle">
                            Наш адрес:
                        </p>
                        <h3 className="map__address-title">
                            auto.wash@gmail.com
                        </h3>
                    </div>
                </div>
                <hr/>
                <div className="map__btn-main-cont">
                    <button className="map__btn">
                        ЗАБРОНИРОВАТЬ СТОЛ
                    </button>
                    <div className="map__btn-cont">
                        <h3 className="map__btn-title">
                            +7 (917) 510-57-59
                        </h3>
                        <p className="map__btn-subtitle">
                            Звоните или оставляйте заявку
                        </p>
                    </div>
                </div>
                <div className="map__end">
                    <h3 style={{fontSize: "16px",marginTop: "26px"}} className="map__title">
                        Мы в соц сетях:
                    </h3>
                    <div className="map__end-cont">
                       <AiFillFacebook style={{fontSize: "24px",background:"white"}}/>
                        <AiFillInstagram style={{fontSize: "24px",background:"white"}}/>
                        <AiFillYoutube style={{fontSize: "24px",background:"white"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;