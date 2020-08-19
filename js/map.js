mapboxgl.accessToken =
  "pk.eyJ1IjoienJmb3giLCJhIjoiY2psaTZucGx0MXB6cjNwbHFld3BxZ2sxcSJ9.kPGAnxdWP9-sI3pAI1C27Q";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-99.13363, 19.435178],
  zoom: 15,
});

var marker = new mapboxgl.Marker().setLngLat([-99.13363, 19.435178]).addTo(map);
