/* eslint-disable no-undef */
const createMapBox = ({ center, zoom }) => {
  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center,
    zoom: zoom || 13,
  });

  map.addControl(new mapboxgl.NavigationControl());
  return map;
};

const createMapBoxMarker = ({ map, classNames, center, popup }) => {
  const markerElement = document.createElement('div');
  markerElement.className = classNames;

  new mapboxgl.Marker(markerElement)
    .setLngLat(center)
    .setPopup(popup)
    .addTo(map);
};

const createMapBoxPopup = (thread) => {
  const popup = new mapboxgl.Popup({ className: 'popup' }).setHTML(
    `<div>
        <img src="${thread.pictureUrl}" />
        <p>${thread.caption}</p>
      </div>`
  );
  return popup;
};

export { createMapBox, createMapBoxMarker, createMapBoxPopup };
