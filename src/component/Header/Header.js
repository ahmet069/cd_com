/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Mobile_menu from './Mobile_menu';

function Header() {
    function SetNavigation() {
        const url = document.URL
        console.log(url)
    }
    console.log(SetNavigation())
    const [screenName, setScreenName] = useState('Ana Sayfa')
    const [a, setA] = useState('Ana Sayfa')
    const HeaderLink = (props) => {
        const borderColor = props.title === screenName ? '#fff' : '#FB2576';
        const b_width = props.title === screenName ? 0 : 0;
        const color = props.title === screenName ? '#FB2576' : '#fff';
        return (
            <Link to={props.link}>
                <li
                    style={{ background: borderColor, color: color }}
                    onClick={() =>
                        [setScreenName(props.title),
                        document.title = 'Çarşı Döner - ' + props.title]}
                        >
                    {props.title}
                </li></Link>
        )
    }
    return (
        <body>
            <div id='header_area'>
                <h1> <img src={require('./img/logo1.webp')} alt='img1' id="logo" height={70} /></h1>
                <nav className='nav_main'>
                    <HeaderLink title='Ana Sayfa' link='/' />
                    <HeaderLink title='Menu' link='/menu' />
                    <HeaderLink title='Hakkımızda' link='/abouthus' />
                </nav>
                <Mobile_menu
                    setScreenName={setScreenName}
                />
            </div>
        </body>
    )
}

// function Mobile_menu(props) {
//     const setScreenName = props.setScreenName;
//     return (
//         <Menu
//             menuButton={<MenuButton id='mobil_menu_container'>
//                 <img
//                     src={require('../../img/menu_btn.webp')}
//                     className='menu_icon'
//                 />
//             </MenuButton>}
//             transition>
//             <MenuItem onClick={() => setScreenName('Ana Sayfa')}>
//                 <Link to={'/'}>
//                     <p>
//                         Ana sayfa
//                     </p>
//                 </Link>
//             </MenuItem>
//             <MenuItem onClick={() => setScreenName('Menu')}>

//                 <Link to={'/menu'}>
//                     <p>
//                         Menü
//                     </p>
//                 </Link>
//             </MenuItem>
//             <MenuItem onClick={() => setScreenName('Hakkımızda')}>

//                 <Link to={'/abouthus'}>
//                     <p>
//                         Hakkımızda
//                     </p>
//                 </Link>
//             </MenuItem>
//         </Menu>
//     )
// }

export default Header;
