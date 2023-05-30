var searchResultsEl = document.querySelector('#search-results');
var userSearchEl = document.querySelector('#q');
var searchFormEl = document.querySelector('#search-form');
var submitBtn = document.querySelector('#btn btn-primary');
var currentDate = dayjs().format('MM/DD/YYYY');
var currentDayContainer = document.querySelector('#current-day');
var fiveDay = document.querySelector('#five-day');
var cityLat = 41.85;
var cityLon = -87.65;

var geoURL = `http://api.openweathermap.org/geo/1.0/direct?q="${userSearchEl}"&limit=1&appid=ede68cfb4c128831ac4e54c459f93d77`
var curURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=imperial&lastupdate&appid=ede68cfb4c128831ac4e54c459f93d77`
var fiveDayURL = `api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=ede68cfb4c128831ac4e54c459f93d77`

function getCityWeather(event) {
    event.preventDefault();
    var cityInput = userSearchEl.value
    currentWeather(cityInput);
    console.log(currentDate);
}