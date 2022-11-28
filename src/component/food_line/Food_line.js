import React from 'react'
import './Food_line.css'
export default function Food_line() {
    return (
        <div id='container'>
            <img src={require('./img/dd2.webp')} />
            <article>
                <p className='title'>
                    Favori Lezzetini Seç
                </p>
                <p className='subtitle'>
                    Dönerin enfes lezzetini Çarşı Döner
                    kalitesi ile çeşit çeşit lezzetler sunuyoruz. Şimdi siz de favori Çarşı Döner lezz
                </p>
                <button>
                    <a href='https://www.yemeksepeti.com/restaurant/fteg/carsi-doner-fteg' target={'_blank'}>
                        Restorana Git
                    </a>
                </button>
            </article>
        </div>
    )
}
