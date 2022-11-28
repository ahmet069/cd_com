import React from 'react'
import './Menu_line.css'

export default function MenuLine({name , inculdes , price , img , bg}) {
  return (
    <div className='menuLine' onDoubleClick={() => {alert('iki kere tıklandı')}}>
      <img src={img} alt={name}/>
      <div className='article'>
        <p className='menu_name'>{name}</p>
        <p className='menu_includes'>{inculdes}</p>
      </div>
      <div className='price_box'>
        <p className='menu_price'>{price}</p>
      </div>
    </div>
  )
}
