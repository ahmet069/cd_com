/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import '../App.css';
import Footer from '../component/footer';
import BlueArea from '../component/blue_area/BlueArea';
import Contect_area from '../component/contact_area/Contect_area';
import Contact_bar from '../component/Contact_bar/Contact_bar';
import Brands_area from '../component/brands_area/Brands_area';
import Foods_4_area from '../component/foods_4_area/foods_4_area';
import Food_line from '../component/food_line/Food_line';

const { innerHeight: height } = window;

export default class App extends React.Component {
  render() {
    if (height > 100) {
      return (
        <body>
          <img src={require('../img/kapak.webp')} alt='img1' className="image1" />
          <img src={require('../img/mobil_image.webp')} alt='img1' className="M_image1" />
          <Brands_area />
          <BlueArea />
          <Food_line/>
          <Foods_4_area />
          <Contect_area />
          <Contact_bar />
          <Footer />
        </body>
      );
    }
  }
}