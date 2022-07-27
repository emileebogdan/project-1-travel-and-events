var searchFormEl = document.querySelector('#search-form');
var submitEl = document.querySelector('#submit-button');


submitEl.addEventListener('click', handleSearchFormSubmit);
function handleSearchFormSubmit(event) { 
  event.preventDefault();
  var searchInputVal = document.querySelector('#search-input').value
  getLatLng(searchInputVal)

}
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

function getLatLng(searchInputVal) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: searchInputVal
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      console.log(lat, lng);
    }
  });
}

