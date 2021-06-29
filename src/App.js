import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './index.css';
import ReactDOM from 'react-dom';
import "./assets/css/leaflet.css"
import MapIndex from './components/MapIndex'
// import SimpleExample from './components/simple';
import MapIndexoffline from './components/MapIndexoffline';
import OtherLayersExample from './components/OtherLayerExample';
// import {geoJSON} from 'leaflet';
import Geojson from './components/Geojson';



function App() {
  
  return (
    <div id="root"> 
    <OtherLayersExample />  
    </div>   
    
  );
}

export default App;
