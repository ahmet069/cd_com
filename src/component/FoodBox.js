import React, { Component } from 'react'
import "./foodbox.css"


export default class FoodBox extends Component {
    hoverAnimation = (event) => {
        event.target.style.background = 'red';
    }
    leave_animatinon = () => {
        return (
            null
        )
    }
    render() {



        const { image, text, link, button_title , title} = this.props;
        return (
            <div style={mystyle.container2} className="container2">
                <div style={mystyle.article}>
                    <img
                        src={image}
                        style={mystyle.picture}
                        alt="food"
                    />
                </div>
                <div className="text_button">
                    <h2>{title}</h2>
                    <p style={mystyle.p}> {text}</p>
                    <a href={link}>
                        <div
                            className='button_menu'
                            onMouseEnter={() => this.hoverAnimation}
                            onMouseLeave={this.leave_animatinon}
                        >
                            <span>

                                {button_title}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}


const mystyle = ({
    button_menu: {
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        borderWidth: 0,
    },

})

