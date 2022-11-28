import React, { Component } from 'react'

export default class FoodLine extends Component {
    render() {
        const { title, contents } = this.props;
        return (
            <div>
                <div className="menu_area">
                    <p id='menu_title'>{title}</p>
                    <p id='menu_subtitle'>{contents}</p>
                </div>
            </div>
        )
    }
}
