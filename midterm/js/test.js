
/* =====================
 Leaflet setup
===================== */
var philly = "https://gist.githubusercontent.com/Ziqinwang/175b3c0fbca09e304edece2e0c757d44/raw/5c7671b92d0af864c06228e888d46c2d1284e755/mid.json";

var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#ff7800",
    stroke:false,
    fillOpacity: 0.6
};

$(document).ready(function() {
  $.ajax(philly).done(function(data){
    var parsedData = JSON.parse(data);
    console.log(parsedData);
    L.geoJSON(parsedData, {
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(mymap);
  });
});
