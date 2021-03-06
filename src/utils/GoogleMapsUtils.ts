export const loadMapApi = () => {
  const mapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`;
  const scripts = document.getElementsByTagName("script");

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapURL) === 0) {
      return scripts[i];
    }

    const googleMapScript = document.createElement("script");
    googleMapScript.src = mapURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
  }
};
