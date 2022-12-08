// ham button 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Sticky scroll nav
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// button Hover 
document.getElementById("btn").addEventListener("mouseover", function() {
  document.getElementById("btn").style.backgroundColor = "green";
});
  
document.getElementById("btn").addEventListener("mouseout", function() {
  document.getElementById("btn").style.backgroundColor = "black";

});


// Wind Chill and Weather API 
const temp = document.querySelector('#current-temp').textContent;
const windspeed = document.querySelector('#ws').textContent;

if(temp < 50 && windspeed > 4.8){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed, 0.16)) + (0.4275*temp*Math.pow(windspeed, 0.16)));

    const windchill = document.querySelector('#wc') 

    windchill.textContent = chill; 

}
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=ac0808b5f2a4fab6468a23a8bc7770f4";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    document.querySelector('#humidity').textContent = (jsObject.main.humidity).toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
// document.querySelector('#weathericon').setAttribute('src', iconsrc);
// document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

  };
getWeather();

let date = new Date(); 
let year = date.getFullYear(); 

document.querySelector('.year').innerHTML = year;  

//last upadted 

let currentdate = document.lastModified; 
document.querySelector('.updated').innerHTML = currentdate;

