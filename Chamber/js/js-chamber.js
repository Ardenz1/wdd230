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
