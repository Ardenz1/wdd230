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

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
// document.querySelector('#weathericon').setAttribute('src', iconsrc);
// document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

  };
getWeather();

// Recieve Info from json FIle 
//ASYNC AWAWIT fetch 
const requestURL = 'https://ardenz1.github.io/wdd230/ti_suites/info.json';

async function getTemples(requestURL){ 
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject); 
        const temples = jsObject['temples'];
        console.log(temples[0].lastname); 
        prophets.forEach(disaplayTemples);

    }

};

getTemples(requestURL); 

function disaplayTemples(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p'); 
    
    h2.textContent = item.name; 
    p1.textContent = 'Address:' + item.address ;
    p2.textContent = ' Place of Birth: ' + item.email;
    img.setAttribute('alt', item.name + ' ' + item.session);

    card.appendChild(h2);
    card.appendChild(p1); 
    card.appendChild(p2); 
    document.querySelector('.cards').appendChild(card); 

}
