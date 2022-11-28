import React from 'react'
import './foods_4_area.css'

export default function Foods_4_area() {
    return (
        <div className="foods4_area">
            <div>
                <p>Köfte</p>
                <img src={require('./img/food1.webp')} alt='img1' />
            </div>
            <div>
                <p>Yarım Ekmek</p>
                <img src={require('./img/food2.webp')} alt='img1' />
            </div>
            <div>
                <p>Porsiyon Döner</p>
                <img src={require('./img/food3.webp')} alt='img1' />
            </div>
        </div>
    )
}
