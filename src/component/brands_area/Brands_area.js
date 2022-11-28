import React from 'react'
import './Brands_area.css'

export default function Brands_area() {
    return (
        <div>
            <div className="brands_area">
                <div>
                    <a target='_blank' href="https://getir.com/yemek/restoran/carsi-doner-yenisehir-mah-pendik-istanbul/">
                        <img src={require('./img/getir.webp')} alt='img1' />
                    </a>
                </div>
                <div className="brands">
                    <a target='_blank' href="https://www.yemeksepeti.com/restaurant/fteg/carsi-doner">
                        <img src={require('./img/ys.webp')} alt='img1' />
                    </a>
                </div>
            </div>
            <a href='https://www.yemeksepeti.com/restaurant/fteg/carsi-doner-fteg'>
                <div
                    className='order_button'
                >
                    <p class="text">Sipariş Ver</p>
                </div>
            </a>
        </div>
    )
}
