import React from 'react'
import './Contact_area.css'

export default function Contect_area() {
    return (
        <div  id='Contact_container'>
            <div className='icons_area'>
                <li>
                    <img src={require('./img/call.webp')} alt='img1' className="middle_icon" />
                    <h4>Telefon</h4>
                    <p>+90 216 482 15 14</p>
                </li>
                <li>
                    <img src={require('./img/location.webp')} alt='img1' className="middle_icon" />
                    <h4>Adres</h4>
                    <p>Yenişehir, Mustafa Akyol Sokağı No:11, 34912 Pendik/İstanbul</p>
                </li>
                <li>
                    <img src={require('./img/mail.webp')} alt='img1' className="middle_icon" />
                    <h4>Mail Adres</h4>
                    <p>carsidonerk@hotmail.com</p>
                </li>
            </div>
        </div>
    )
}
