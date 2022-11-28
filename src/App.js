import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./screens/Home";
import Menu from './screens/Menu';
import AboutUs from './screens/AboutUs';
import Header from './component/Header/Header';

export default class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="abouthus" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      );
  }
}






