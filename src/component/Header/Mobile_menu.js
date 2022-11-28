import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
export default function Mobile_menu(props) {
    const [isEnable, setIsEnable] = useState(false)
    const setScreenName = props.setScreenName;
    const Menu = (props) => {
        if (isEnable === true) {
            return (
                <ul>
                    <MenuItem title='Ana Sayfa' link='/' />
                    <MenuItem title='Menu' link='/menu' />
                    <MenuItem title='Hakkımızda' link='./abouthus' />
                </ul>
            )
        }
        else {
            return null
        }
    }
    const MenuItem = (props) => {
        return (
            <Link to={props.link} >
                <li
                    onClick={() =>
                        [setScreenName(props.title),
                        document.title = 'Çarşı Döner - ' + props.title]}
                >
                    {props.title}
                </li>
            </Link>
        )
    }
    return (
        <nav
            id='mobile_menu'
        >
            <img
                src={require('./img/menu_btn.webp')}
                onClick={() => [setIsEnable(!isEnable)]}
            />
            <Menu />
        </nav>
    )
}






