import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Menu from './Menu';
import AboutUs from './component/AboutUs';
import Header1 from './component/header';




const { innerHeight: height } = window;

export default class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <Header1/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="abouthus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      );
  }
}






