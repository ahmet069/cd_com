import React from 'react'
import MenuLine from '../component/Menu_line/MenuLine';
import './Menu.css'

export default function Menu() {
  return (
    <article id='menu_container'>
      <MenuLine
        name='Özel Soslu Dürüm'
        inculdes='Patates kızartması , tavuk döner ve sos.'
        price='40₺'
        img={require('../img/fd1.webp')}
      />
      <MenuLine
        name='Özel Soslu Kaşarlı Dürüm'
        inculdes='Patates kızartması , tavuk döner ve kaşar.'
        price='45₺'
        img={require('../img/fd1.webp')}
      />
      <MenuLine
        name='Tam Ekmek Tavuk Döner'
        inculdes='Patates kızartması , tavuk döner ve sos.'
        price='50₺'
        img={require('../img/fd1.webp')}
      />
      <MenuLine
        name='Yarım Ekmek Tavuk Döner'
        inculdes='Patates kızartması , tavuk döner.'
        price='35₺'
        img={require('../img/fd4.webp')}
      />
     <MenuLine
        name='Porsiyon Tavuk Döner'
        inculdes='Pilav , patates , kızartması , turşu ve tavuk döner.'
        price='50₺'
        img={require('../img/fd3.webp')}
      />
     <MenuLine
        name='Pilav Üstü Tavuk Döner'
        inculdes='Pilav , patates , kızartması , turşu ve tavuk döner.'
        price='48₺'
        img={require('../img/fd3.webp')}
      />
      <MenuLine
        name='Patso'
        inculdes='Patates kızartması ketçap ve mayonez.'
        price='35₺'
        img={require('../img/fd4.webp')}
      />
      <MenuLine
        name='Patates Tabağı'
        inculdes='Patates kızartması'
        price='25₺'
        img={require('../img/fd4.webp')}
      />
    </article>
  )
}
