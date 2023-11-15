import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import LogoMaker from './components/LogoMaker/LogoMaker';
import Header from './components/Header/Header';
import Footer from './components/Footer/FooterSite';
import BrandKit from './components/BrandKit/BrandKit';
import Blog from './components/Blog/Blog';
import Onboarding from './components/Onboarding/Onboarding';
import Explore from './components/Explore/Explore';
import Editor from './components/Editor/Editor';

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LogoMaker />} />
          <Route path="brand_kit" element={<BrandKit />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/onboarding' element={<Onboarding />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/editor' element={<Editor />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
