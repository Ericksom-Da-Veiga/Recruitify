import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar.js';
import Brand from './Images/logo.png';
import Intro from './Components/Intro';

import img1 from './Images/job1.jpg';
import img2 from './Images/job2.jpg';
import img3 from './Images/job3.jpg';
import img4 from './Images/job4.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar img={Brand} link1='#' link2='#' link3='#' link4='#'/>
    <Intro img1={img1} img2={img2} img3={img3} img4={img4} />
  </div>
  
);

