localStorage.setItem('visitDate', 'Date.now'); 
let visitDate = localStorage.getItem('visitDate');
console.log('visitDate'); 

let currentDate= Date.now(); 

let previous = localStorage.getItem('1', '2')

if(!localStorage.getItem('lastvisit')){
    localStorage.setItem('lastvisit', Date.now()); 
    document.getElementById("sincevisit").textContent = 'This is your 1st visit!!';
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
        document.getElementById('sincevisit').textContent = daysDifference; 

    localStorage.setItem('lastvisit', Date.now()); 
}
