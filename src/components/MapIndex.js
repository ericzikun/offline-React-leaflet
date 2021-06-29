import L from 'leaflet'
import React  , { Component} from 'react'
// import '../assets/css/leaflet.css'
 
import '../../src/index.css'
// import Map from './Map'
class MapIndex extends Component{
    componentDidMount()
    {
        // 导入伦敦地图 官方demo
        var mymap = L.map('root').setView([51.505,-0.09],13);
         
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(mymap);
        
        // 导入中国瓦片地图
        // var url = './newtask/{z}/{x}/{y}.jpg';
        // var mymap = L.map('my-offline-leaf-map').setView([29.5, 110.5], 10);     
        // L.tileLayer(url,{minZoom:9,maxZoom:12,}).addTo(mymap);
     

        // var marker = L.marker([51.5, -0.09]).addTo(mymap);
      //   var circle = L.circle([51.508, -0.11], {
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
export default MapIndex