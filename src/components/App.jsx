import '@fontsource/noto-sans';
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import {Routes,Route, useParams} from 'react-router-dom';
import qwa from "../assets/QWA_Logo_Full_Color.svg"
// import viteLogo from '/vite.svg'
import Banner from './Banner';
import Question from './Question'
import Radials from './Radials'
import webs from '../assets/webs.png'
import _ from "lodash";
import circuit from "../assets/abstract_background_with_modern_hexagonal_tech_design_2801.jpg"
import { Link, useNavigate, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import Results from './Results';

// import './App.css'










export default function App() {


return(<>

  <Routes>
   <Route path="/" element={<Welcome />}  />
   <Route path="/results" element={<Results />}  />
</Routes>
  </>)
}
