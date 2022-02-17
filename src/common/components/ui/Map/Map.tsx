import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface MapProps {}
const containerStyle = {
  width: "1200px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map: React.FunctionComponent<MapProps> = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAm6DqCyuEULLH66u7Mw36Luf9HLFHPJqg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : (
    <></>
  );
};
export default Map;
