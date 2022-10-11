import React from 'react';
import './App.css';
import Header1 from './component/header';
import Footer from './component/footer';
import FoodLine from './component/FoodLine';
import img1 from "./img/dd2.webp"





const { innerHeight: height } = window;

export default class Menu extends React.Component {
  render() {
    if (height > 100) {
      return (
        <body id='menu_body'>
          <h1 id="menu_h1">Menümüz</h1>
          <div id="menu_image_container">
            <img src={img1} alt="asd" />
          </div>
          <div style={mystyle.labels} id="menu">

            <div id="menu_inside">
              <FoodLine
                title="Özel Soslu Döner Dürüm"
                contents="Tavuk döner , turşu , patates ve özel Çarşı Döner sosu."
              />
              <FoodLine
                title="Özel Soslu Kaşarlı Döner Dürüm"
                contents="Tavuk döner , turşu , patates , kaşar ve özel Çarşı Döner sosu. "
              />
              <FoodLine
                title="Yarım Ekmek Döner"
                contents="Tavuk döner , turşu , patates ve özel Çarşı Döner sosu. "
              />
              <FoodLine
                title="Tam Ekmek Döner"
                contents="Tavuk döner , turşu , patates ve özel Çarşı Döner sosu."
              />
              <FoodLine
                title="Patso Sandviç"
                contents="Patates kızartması, ketçap ve mayonez."
              />
              <FoodLine
                title="Menü 1"
                contents="Tavuk Döner Dürüm (Patates kızartması, turşu) + Patates Kızartması + Kutu İçecek. "
              />
              <FoodLine
                title="Patates Kızartması"
                contents="Patates kızartması , ketçap ve mayonez."
              />
              <FoodLine
                title="Pilav Üstü Döner"
                contents="Bol pilav , tavuk döner , turşu, patates kızartması ve özel sos."
              />
              <FoodLine
                title="Porsiyon Döner"
                contents="Tavuk döner , patates kızartması , turşu ve özel sos"
              />
              <FoodLine
                title="Izgara Kasap Köfte"
                contents="Közlenmiş domates, közlenmiş yeşilbiber, patates kızartması ve pilav."
              />
            </div>
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
    textAlign: "left",
  },
  labels: {
    marginTop: 10,
    marginBottom: 10,
  }

})

