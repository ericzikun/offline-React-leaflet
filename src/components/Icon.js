import L from 'leaflet';
import '../index.css';
const iconPerson = new L.Icon({
    iconUrl: require('../assets/images/marker-icon-2x.png'),
    iconRetinaUrl: require('../assets/images/marker-icon-2x.png'),
    iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    shadowUrl: "../assets/images/marker-shadow.png",
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: new L.Point(20, 30),
    // className: 'leaflet-div-icon'
});

export { iconPerson };