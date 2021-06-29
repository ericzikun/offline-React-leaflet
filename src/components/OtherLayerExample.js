import React, { Component } from 'react';
import L from 'leaflet';
import { iconPerson } from "./Icon";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
  GeoJSON,
  Marker
} from 'react-leaflet';
// import london_postcodes from '../assets/geojson/london.json'
import ship_trajectory from '../assets/geojson/trajectory.json'
import ship_trajectory2 from '../assets/geojson/trajectory2.json'
import circle_data from '../assets/geojson/circledata.json'
import { EditControl } from "react-leaflet-draw"
import HeatmapLayer from 'react-leaflet-heatmap-layer';
// import HeatmapLayer from './HeatmapLayer.js';
import { addressPoints } from '../assets/heatpoint/realworld.10000.js';
type State = {
  lat: number,
  lng: number,
  zoom: number,
}
console.log("判断轨迹json是否为空")
console.log(ship_trajectory==null)
// console.log(circle_data[0].center.coordinates)
// console.log(circle_data.length)
//判断如果geojson type是多边形，则调用此方法更新center
// const trajectoryLength = ship_trajectory[0].geometry.coordinates.length
// const arr = ship_trajectory[0].geometry.coordinates[0]
// console.log("-----经纬度：")
// console.log(arr)
// var sum1 = 0;
// var sum2 = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum1 += parseFloat(arr[i][0]);
//     sum2 += parseFloat(arr[i][1]);
// };
// var avg1 = sum1/arr.length;
// var avg2 = sum2/arr.length;
// console.log("经度为：" + avg1 + "纬度为：" + avg2)
// const center = [avg2,avg1]
// console.log(center)


const center = [ -10, 120]
// const center = [ 0,0]

const rectangle = [
  [27.5, 110.5],
  [26.5, 108.5],
]

//循环每一个中心圆 先判断圆json中是否有值：
if (circle_data!=null){
  const len = circle_data.length;
  // console.log(circle_data[0].center.coordinates)
  var items = [];
    for (let index = 0; index < len; index++) {
      items.push( <Circle
        center={circle_data[index].center.coordinates}
        color="0"
        fillColor= {circle_data[index].center.color}
        fillOpacity="0.4"
        radius={circle_data[index].center.radius}
         
      />)
    }
}

// console.log(items)

//热力图 判断文件是否为空
var items2 = [];
if(addressPoints!=null){
  items2.push(
    <HeatmapLayer
    fitBoundsOnLoad
    fitBoundsOnUpdate
    points={addressPoints}
    longitudeExtractor={m => m[1]}
    latitudeExtractor={m => m[0]}
    intensityExtractor={m => parseFloat(m[2])} />
  )}
       
//给geojson中的轨迹定义起点marker和终点marker
 //先提取经纬度中的所有起点 如果是线LineString：
 console.log("-----线的经纬度")
//  console.log(ship_trajectory[0].geometry.coordinates)
// const startPoint = [];
// const endPoint = [];
// for (let index = 0; index <ship_trajectory.length; index++) {
//   startPoint.push(ship_trajectory[index].geometry.coordinates[0]); 
//   let len = ship_trajectory[index].geometry.coordinates.length;
//   endPoint.push(ship_trajectory[index].geometry.coordinates[len-1]);
// }
// console.log("起点坐标为：" + startPoint + "\n" + "终点坐标为：" + endPoint)
// console.log(startPoint)

export default class OtherLayersExample extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 12,
  }
  //定义geojson的样式
  geoJSONStyle(feature) {
    return {
      // color: '#1f2021',
      color:feature.properties.lineColor,
      weight: 1,
      fillOpacity: 0.5,
      fillColor: feature.properties.filledColor
    }
  }
  //定义选中geojson轨迹的提示方法
  onEachFeature(feature: Object, layer: Object) {
    const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
    layer.bindPopup(popupContent)
  }
 
//判断geojson是否为空：
isGeojson(){
  if(ship_trajectory!=null){
    return(
      <GeoJSON
      data={ship_trajectory}
      style={this.geoJSONStyle}
      onEachFeature={this.onEachFeature}
    />
    )}
}
  

  render() {
    return (
      <Map  center={center} zoom={4} >
       {items2}
        <TileLayer
          url="http://localhost:8080/xyz/roadmap/{z}/{x}/{y}.png"
          // url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          minZoom={1} maxZoom={8}
        />
        <LayerGroup>
          
          <LayerGroup>
            {items}
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup color="purple">
          <Popup>Popup in FeatureGroup</Popup>
          {/* <Circle center={[25, 101.5]} radius={10000} />
          <Rectangle bounds={rectangle} /> */}
          <EditControl
      position='topright'
      onEdited={this._onEditPath}
      onCreated={this._onCreate}
      onDeleted={this._onDeleted}
      draw={{
        rectangle: false
      }}
      
    />
        </FeatureGroup>
        {this.isGeojson()}
        {/* <Marker position={[37,120]} icon={iconPerson}>
        </Marker> */}
        {/* {startPoint.map(item => {
          return(
            <Marker position={[item[1],item[0]]} icon={iconPerson}/>
          )
        })} */}
      </Map>
    )
  }
}