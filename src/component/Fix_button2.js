import React, { Component } from 'react'

export default class Fix_button2 extends Component {
    render() {
        const { link, image, position, marginLeft, marginBottom, width, height } = this.props;
        const styles = {

        }
        return (
            <div id="fix_button2"
                style={{
                    right: position == 'left' ? 0 : null,
                    marginLeft: marginLeft,
                    marginBottom: marginBottom,
                    width: width,
                    height: height,
                    backgroundColor:'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex:1,
                }}>
                <a href={link}>
                    <img style={{height:60 , marginTop:20}}  src={image} alt="ara" />
                </a>
            </div>
        )
    }
}
