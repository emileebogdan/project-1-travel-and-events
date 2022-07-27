var searchFormEl = document.querySelector('#search-form');
var submitEl = document.querySelector('#submit-button');


submitEl.addEventListener('click', handleSearchFormSubmit);
function handleSearchFormSubmit(event) {
  event.preventDefault();
  var stateOne = document.querySelector('#state1').value
  var stateTwo = document.querySelector('#state2').value
  getLatLngOne(stateOne)
  getLatLngTwo(stateTwo)



}
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

function getLatLngOne(stateOne) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: stateOne
  }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var lat1 = results[0].geometry.location.lat();
      var lng1 = results[0].geometry.location.lng();
      console.log(lat1, lng1);
      // disasterSearch(lat1, lng1)

    }
  });
}
function getLatLngTwo(stateTwo) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: stateTwo
  }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var lat2 = results[0].geometry.location.lat();
      var lng2 = results[0].geometry.location.lng();
      console.log(lat2, lng2);
      disasterSearch(lat2, lng2)

    }
  });
}

function disasterSearch(lat1, lng1, lat2, lng2) {

  var url = "https://eonet.gsfc.nasa.gov/api/v3/events?bbox=" + lng1 + "," + lat1 + "," + lng2 + "," + lat2
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
}


