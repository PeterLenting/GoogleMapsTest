var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -9.397, lng: 150.644 },
    zoom: 8
  });
}