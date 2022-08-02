var searchFormEl = document.querySelector('form');
var submitEl = document.querySelector('#submit-button');
var disasterDisplay = document.getElementById('disaster');
var disasterText = document.getElementById("disasterList");




function handleSearchFormSubmit(event) {
  event.preventDefault();
  var stateOne = document.querySelector('#state1').value
  var stateTwo = document.querySelector('#state2').value
  getLatLngOne(stateOne)
  getLatLngTwo(stateTwo)

  searchFormEl.classList.add("remove");

}

function getLatLngOne(stateOne) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: stateOne
  }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var lat1 = results[0].geometry.location.lat();
      var lng1 = results[0].geometry.location.lng();
      console.log(lat1, lng1);

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
      console.log(data);
      // top row for my labels - disaster name, link, type. thead

      var disHead = 

      for (let i = 0; i < data.events.length; i++) {

        var disRow = i + 1;


      // Title = (data.events[i].title);
      // dis= (data.events[i].link);
      // Cat = (data.events[i].categories[0].title);


      //pseudo code for table stuff
        var tableRow = `<tr>
        <td>${data.events[i].title}</td>
        <td>${data.events[i].link}</td>
        <td>${data.events[i].categories[0].title}</td>
        </tr>`

        disasterDisplay.appendChild(disRow);
        disasterDisplay.appendChild(tableRow);
      }
    

    })
    return;
}

submitEl.addEventListener('click', handleSearchFormSubmit);

// Original:
// console.log(data);
// for (let i = 0; i < data.events.length; i++) {
//   var li = document.createElement("li");
//   li.append(data.events[i].title);
//   disasterDisplay.append(li);
// }