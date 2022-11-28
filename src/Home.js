/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';

import Header1 from './component/header';
import Footer from './component/footer';
import FoodBox from './component/FoodBox';

/*İCONS*/
import icon_clear from "./img/icon_clear.webp"
import icon_quality from "./img/icon_quality.webp"
import icon_time from "./img/icon_time.webp"
import icon_experience from "./img/icon_experience.webp"


import dd2 from "./img/dd2.webp"
import dd3 from "./img/dd3.webp"
import image from "./img/kapak.webp";
import food1 from "./img/food1.webp"
import food2 from "./img/food2.webp"
import food3 from "./img/food3.webp"
import food4 from "./img/food4.webp"
import Order_img from "./img/order.webp"

import call_icon from "./img/call_icon.webp"
import mail_icon from "./img/mail_icon.webp"
import location_icon from "./img/location_icon.webp"


import mobile_img from "./img/mobil_image.webp"
import ys from "./img/ys.webp"
import getir from "./img/getir.webp"

import Fix_button from './component/Fix_button';
import Fix_button2 from './component/Fix_button2';





const { innerHeight: height } = window;

export default class App extends React.Component {
  render() {
    if (height > 100) {
      return (
        <body style={mystyle.container}>
          <img src={image} alt='img1' className="image1" />
          <img src={mobile_img} alt='img1' className="M_image1" />
          <div className='container'>
            <div className="App">
              <h1 style={mystyle.h1}>Çarşı Döner</h1>
            </div>
            <div className="brands_area">
              <div className="brands">
                <a target='_blank' href="https://getir.com/yemek/restoran/carsi-doner-yenisehir-mah-pendik-istanbul/">
                  <img src={getir} alt='img1' />
                </a>
              </div>
              <div className="brands">
                <a target='_blank' href="https://www.yemeksepeti.com/restaurant/fteg/carsi-doner">
                  <img src={ys} alt='img1' />
                </a>
              </div>
            </div>
            <a href='https://www.yemeksepeti.com/restaurant/fteg/carsi-doner-fteg'>
              <div
                className='order_button'
              >
                <span class="text">Sipariş Ver</span>
              </div>
            </a>
            <div id='blue_area'>
              <div className="blue_area">
                <div>
                  <li>
                    <img src={icon_clear} alt="hijyen" />
                    <h4>Hijyen</h4>
                    <p>
                      Temizlik ve hijyen kurallarına uygun.
                    </p>
                  </li>
                  <li>
                    <img src={icon_time} alt="hijyen" />
                    <h4>Hızlı Teslimat</h4>
                    <p>
                      Siparişiniz dakikalar içinde kapınızda.
                    </p>
                  </li>
                </div>
                <div>
                  <li>
                    <img src={icon_quality} alt="hijyen" />
                    <h4>Kalite</h4>
                    <p>
                      Kaliteli tavuk döner.
                    </p>
                  </li>
                  <li>
                    <img src={icon_experience} alt="hijyen" />
                    <h4>Tecrübe</h4>
                    <p>
                      15+ yıl tecrübe
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className="foodsContainer">
              <FoodBox
                title="Lezzet"
                button_title="Menü"
                link={"Menu.js"}
                image={dd2}
                text={"Çarşı Döner kalitesi ile hazırlanan ve damaklarda iz bırakan lezzet."} />
              <FoodBox
                title="Özel Sos"
                button_title="Menü"
                link={"Menu.js"}
                image={dd3}
                text={"Özel tarifli sosu ile meşhur Çarşı Döner Lezzeti"} />
            </div>

            <div className="foods4_area">
              <div>
                <img src={food1} alt='img1' />
              </div>
              <div >
                <img src={food2} alt='img1' />
              </div>
              <div>
                <img src={food3} alt='img1' />
              </div>
              <div >
                <img src={food4} alt='img1' />
              </div>
            </div>
          </div>
          <div className='iconsContainer'>
            <div className='icons_area'>
              <li>
                <img src={call_icon} alt='img1' className="middle_icon" />
                <h4>Telefon</h4>
                <p>+90 216 482 15 14</p>
              </li>
              <li>
                <img src={location_icon} alt='img1' className="middle_icon" />
                <h4>Adres</h4>
                <p>Yenişehir, Mustafa Akyol Sokağı No:11, 34912 Pendik/İstanbul</p>
              </li>
              <li>
                <img src={mail_icon} alt='img1' className="middle_icon" />
                <h4>Mail Adres</h4>
                <p>carsidonerk@hotmail.com</p>
              </li>
            </div>
          </div>
          <div id='mobile_bar'>
            <a href='tel: +902164821514' taget='blank'>
              <p> Ara </p>
            </a>
            <a href='https://www.yemeksepeti.com/restaurant/fteg/carsi-doner-fteg' target='blank'>
              <p> Sipariş Ver </p>
            </a>
          </div>
          <Footer />
        </body>
      );
    }
  }
}






const mystyle = ({
  h1: {
    display: "none",
  },
  p: {
    fontSize: 17,
  },
  container: {
    alignItems: "center",
    textAlign: "center",
  }

})

