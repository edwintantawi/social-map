/* eslint-disable no-undef */
const getCoordinates = () => {
  const gpsOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, gpsOptions);
  });
};

const getAddress = async () => {
  const { coords } = await getCoordinates();
  const response = await fetch(
    `https://api.tiles.mapbox.com/v4/geocode/mapbox.places/${coords.longitude},${coords.latitude}.json?access_token=${MAPBOX_TOKEN}`
  );
  const responseJson = await response.json();
  const placeNames = responseJson.features[1].place_name.split(', ');
  const placeName = `${placeNames.shift()}, ${placeNames.pop()}`;
  return { placeName, coords };
};

export { getCoordinates, getAddress };
