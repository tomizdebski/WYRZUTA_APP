import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import env from "react-dotenv";
import './GoogleMaps.scss'


const mapStyles = {
  width: '980px',
  height: '500px',
};

export const MapContainer = (props)=>  {

  console.log(props.coordinates);

    return (
      <div className="map-container">
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={props.coordinates}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={props.coordinates} />
        </Map>
          
      </div>
    );
  
}

export default GoogleApiWrapper({
  apiKey: env.API_GOOGLE
})(MapContainer);




// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo, useState, useEffect } from "react";
// import  {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
// import './GoogleMaps.scss'

// const API = "AIzaSyA4IC9B_JlO67XLKJssaJMFo1WpGXf-PEQ";



// const GoogleMaps = () => {

//   const [coordinates, setCoordinates] = useState({});

//   const address = async (address) => {
//     const results = await geocodeByAddress(address);
//     const latLng = await getLatLng(results[0]);
//     console.log(latLng);
//     setCoordinates(latLng);
//   };

//   useEffect(()=> {
//       address('Warszawa Stuletnia 12');
//   },[])
  
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: API,
//   });
//   console.log(coordinates);

//   const center = useMemo(() => (coordinates), []);
 
  
//   return (
//     <div className="App">
//       {(!isLoaded && !coordinates) ? (
//         <h1>Loading...</h1>
//       ) : ( 
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}>
//         <Marker position={center} />
//         </GoogleMap> 
//       )}
//     </div>
//   );
// };

// export default GoogleMaps;
