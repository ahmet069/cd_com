import React, { Component } from 'react'

export default class Fix_button extends Component {
    render() {
        const { link, image, position, marginLeft, marginBottom, width, height } = this.props;
        const styles = {

        }
        return (
            <div id="fix_button"
                style={{
                    right: position == 'left' ? 0 : null,
                    marginLeft: marginLeft,
                    marginBottom: marginBottom,
                    width: width,
                    height: height,
                }}>
                <a href={link}>
                    <img src={image} alt="sipariş ver" />
                </a>
            </div>
        )
    }
}
