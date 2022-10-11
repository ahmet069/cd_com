import React, { useState, useEffect } from 'react'
import logo from "../img/logo1.webp";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";



function Header1() {
  const [screenName, setScreenName] = useState('Ana Sayfa')
  const HeaderLink = (props) => {
    const borderColor = props.title === screenName ? '#fff' : '';
    const b_width = props.title === screenName ? 0 : 0;
    const color = props.title === screenName ? '#000' : '#fff';
    return (
      <Link to={props.link}>
        <li
          style={{ background: borderColor, color: color }}
          onClick={() =>
            [setScreenName(props.title),
            document.title = 'Çarşı Döner - ' + props.title]}>
          {props.title}
        </li></Link>
    )
  }
  return (
    <body>
      <div className='header_area'>
        <h1> <img src={logo} alt='img1' className="logo" height={70} /></h1>
        <nav className='Nav'>
          <HeaderLink title='Ana Sayfa' link='/' />
          <HeaderLink title='Menu' link='/menu' />
          <HeaderLink title='Hakkımızda' link='/abouthus' />

        </nav>
      </div>
      <nav className='Mob_nav'>
        {/* <Link to="/"> <li> Ana Sayfa</li></Link>
        <Link to="/menu"><li>Menü</li></Link>
        <Link to="/abouthus"><li>Hakkımızda</li></Link> */}
        <HeaderLink title='Ana Sayfa' link='/' />
        <HeaderLink title='Menu' link='/menu' />
        <HeaderLink title='Hakkımızda' link='/abouthus' />
      </nav>
    </body>
  )
}



const styles = ({
  menu_icon: {
    color: "rgb(248, 248, 0)",
    marginRight: 20,
    display: "none",
  }
})

export default Header1;
