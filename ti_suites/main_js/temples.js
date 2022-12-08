// Recieve Info from json FIle 
const requestURL = 'https://ardenz1.github.io/wdd230/ti_suites/info.json';

async function getTemples(requestURL){ 
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject); 
        const temples = jsObject['temples'];
        console.log(temples[0].name); 
        temples.forEach(disaplayTemples);

    }

};

getTemples(requestURL); 

function disaplayTemples(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p'); 
    let p2 = document.createElement('p'); 
    let p3 = document.createElement('p'); 
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    
    h2.textContent = item.name; 
    p1.textContent = 'Address:' + item.address; 
    p2.textContent = 'Phone:' + item.phone; 
    p3.textContent = 'Email:' + item.email;
    p4.textContent = 'Services:' + item.services; 
    p5.textContent = 'History:' + item.history; 
    p6.textContent = 'Ordinances Offered:' + item.ordinance; 
    p7.textContent = 'Session Schedule:' + item.session; 
    p8.textContent = 'Closure Schedule:' + item.closed;  


    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    document.querySelector('.cards').appendChild(card); 

}
