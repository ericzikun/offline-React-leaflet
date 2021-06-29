import L from 'leaflet'
import React  , { Component} from 'react'
import '../assets/css/leaflet.css'
 
import '../../src/index.css'
// import Map from './Map'

 

class MapIndexoffline extends Component{
    componentDidMount()
    {
        //导入中国瓦片地图
        // var url = './newtask/{z}/{x}/{y}.png';
       
        var url = 'http://localhost:8080/xyz/newtask/{z}/{x}/{y}.png'
        // var url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        // var osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        var mymap = L.map('root').setView([29.5, 110.5], 9);     
        L.tileLayer(url,{minZoom:1,maxZoom:10}).addTo(mymap);
     

        

      //   var marker = L.marker([29.8, 110.8]).addTo(mymap);
      //   var circle = L.circle([29.8, 110.7], {
      //     color: 'red',
      //     fillColor: '#f03',
      //     fillOpacity: 0.5,
      //     radius: 500
      // }).addTo(mymap);
    }


  render()
  {
    return( //这里(不能写到下一行，否则react认为render中没有返回任何内容
      <div> </div>
    )
  }
}
export default MapIndexoffline