import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import LogoMaker from './components/LogoMaker/LogoMaker';
import Header from './components/Header/Header';
import Footer from './components/Footer/FooterSite';
import BrandKit from './components/BrandKit/BrandKit';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LogoMaker />} />
          <Route path="brand_kit" element={<BrandKit />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
