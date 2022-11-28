import React from 'react';
import '../App.css';
import Footer from '../component/footer';
import au1 from "../img/au1.jpg"
import au2 from "../img/au2.jpg"





const { innerHeight: height } = window;

export default class AboutUs extends React.Component {
  render() {
    if (height > 100) {
      return (
        <body style={mystyle.container} >
          <div className="AU">
            <div className="container">
              <h1>Hakkımızda</h1>
              <p>
                Hakkımızda
                Çarşı Döner olarak 15 yılldır müşterilerimize en iyi deneyimi sunmaktan
                mutluluk duyuyoruz. Hijyen ve kalite standartlarına uygun olan
                restoranımızı adresimizde ziyaret edebilirsiniz. Özenle kesilen
                dönerleri en güzel şekilde hazırlayıp özel sosumuzla birlikte
                servis ediyoruz.

                Özenli hizmet, güleryüzlü servis, uygun fiyatlar ve tadına
                doyulmaz bir döner keyfi için Çarşı Döner, hem kapalı hem açık
                alanlara sahip olmanın avantajıyla dört mevsim boyunca döner
                sevenleri ağırlıyoruz.
              </p>
              <div className="AU_img_area">
                <img src={au2} alt="restorant_resmi" />
                <img src={au1} alt="restorant_resmi" />
              </div>
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
    textAlign: "center",
  }

})

