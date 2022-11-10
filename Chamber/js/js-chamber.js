function toggleMenu() {
   document.getElementById("primaryNav").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu; 

//current Date 
let date = new Date(); 
let year = date.getFullYear(); 

document.querySelector('.year').innerHTML = year;  

//last upadted 

let currentdate = document.lastModified; 
document.querySelector('.updated').innerHTML = currentdate;

//Current Date
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); 


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//Meeting Information That Is Day specific
  
    if (date.getDay() == 1 || date.getDay() == 2) {
		document.querySelector('#message-box').
		style.display = 'block';
	}

//LAST DAY VISITED: 
// const = Date.now(); 
// let previous = 
// let difference = current-visit; 
// let diffdays = Math.floor(difference / 1000 / 60/ 60 /24); 

localStorage.setItem('visitDate', 'Date.now'); 
let visitDate = localStorage.getItem('visitDate');
console.log('visitDate'); 

let currentDate= Date.now(); 

let previous = localStorage.getItem('1', '2')
// if ! previous (there is or isn't something in local storage) 
	// set local storage to todays date and "welcome its your first visit" 
//else 
	//get local storage vallue
//the difference between the 2 dates, today and what was in storage. (this is where you do the equation) 
//set the new date in local storage

if(localStorage.getItem('lastvisit')){
    localStorage.setItem('lastvisit', Date.now()); 
    document.getElementById('since-visit').textContent = 'This is your 1st visit!!';
} 
else{
    setStyles();
}

function setStyles(){
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now(); 

    let difference = currDate - prevDate;
        console.log(difference); 
        let daysDifference = Math.floor(difference/ 1000/ 60/ 60/24);
    document.getElementById('since-visit').textContent = daysDifference; 

    localStorage.setItem('lastvisit', Date.now()); 
}


/// Lazy Loading///
const image = document.querySelectorAll('img');

const pimages = document.querySelectorAll('[data-src]');
const options = { 
    threshold: 1, 
    rootMargin: '0px 0px 100px 0px'
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return; 
    }

    img.src = source; 
}
const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },
        options );

pimages.forEach(image => {
    io.observe(image); 
    
    });
// JOIN PAGE GET DATE

document.querySelector('date').value = date;
const date2 = new Date();
const dateTime=
date.getMonth() +'/'+
date.getDate()+'/'+
date.getFullYearear() +''+
date.getHours()+':'+
date.getMinutes() +':'+
date.getSeconds()

///Directory PAGE
const requestURL = 'https://ardenz1.github.io/wdd230/Chamber/js/data.json';

async function getBusinesses(requestURL){ 
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject); 
        const businesses = jsObject['businesses'];
        console.log(businesses[0].name); 
        businesses.forEach(disaplayBusinesses);

    }

};

getBusinesses(requestURL); 

function disaplayBusinesses(item){
    let card = document.createElement('section');
    let p = document.createElement('p');
    

    p.textContent = item.phone;  
  

    card.appendChild(p);
    document.querySelector('.cards').appendChild(card); 
}

