import React from 'react'
import './BlueArea.css'

export default function BlueArea() {
  return (
    <div id='blue_area'>
              <div className="blue_area">
                <div>
                  <li>
                    <img src={require('./img/clear.webp')} alt="hijyen" />
                    <h4>Hijyen</h4>
                    <p>
                      Temizlik ve hijyen kurallarına uygun.
                    </p>
                  </li>
                  <li>
                    <img src={require('./img/time.webp')} alt="hijyen" />
                    <h4>Hızlı Teslimat</h4>
                    <p>
                      Siparişiniz dakikalar içinde kapınızda.
                    </p>
                  </li>
                </div>
                <div>
                  <li>
                    <img src={require('./img/quality.webp')} alt="hijyen" />
                    <h4>Kalite</h4>
                    <p>
                      Kaliteli tavuk döner.
                    </p>
                  </li>
                  <li>
                    <img src={require('./img/experience.webp')}alt="hijyen" />
                    <h4>Tecrübe</h4>
                    <p>
                      15+ yıl tecrübe
                    </p>
                  </li>
                </div>
              </div>
            </div>
  )
}
