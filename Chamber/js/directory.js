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
    let p1 = document.createElement('p');
    let p2 = document.createElement('p'); 
    let h2= document.createElement('h2');
    let p3 = document.createElement('a'); 
    let image = document.createElement('img');
    
    h2.textContent = item.name; 
    p1.textContent = item.address;  
    p2.textContent = item.phone; 
    p3.textContent = item.website; 
    p3.href = item.website;
    p3.target = '_blank';
    image.setAttribute('src', 'images/directory/' + item.image);
  
    card.appendChild(image)
    card.appendChild(h2)
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    document.querySelector('.cards').appendChild(card); 
    
}


async function getTable(requestURL){ 
    const response = await fetch(requestURL);
    console.log(response);
    if(response.ok){
        const jsObject = await response.json();
        console.log(jsObject); 
        const businesses = jsObject['businesses'];
        console.log(businesses[0].name); 
        businesses.forEach(displayTable);

    }

};

getTable(requestURL); 

function displayTable(item){
    let table_rows = document.createElement('tr');
    let table_name = document.createElement('td');
    let table_place = document.createElement('td');
    let table_site = document.createElement('a');
    let bus_name = document.createElement('td');
   

    bus_name.textContent = item.name;
    table_place.textContent = item.name;
    table_name.textContent = item.address ;
    table_place.textContent = item.phone;
    table_site.textContent = item.website;
    table_site.href = item.website;
    table_site.target = '_blank';
    table_rows.appendChild(bus_name);
    table_rows.appendChild(table_name);
    table_rows.appendChild(table_place);
    table_rows.appendChild(table_name);
    table_rows.appendChild(table_place);
    table_rows.appendChild(table_site);
  
  

    document.querySelector('.list').appendChild(table_rows);


}

const element = document.querySelector(".list_button");
element.addEventListener("click", showTable);

function showTable() {
  
    console.log("callig the list")
  let card = document.querySelector(".card_container1")
  let table = document.querySelector(".list_container2"); 
  let styleTable = getComputedStyle(table); 
    if (styleTable.display == "none") {
        table.style.display = "block"; 
        card.style.display = "none"; 
        
    }
}

const button = document.querySelector(".card_button");
button.addEventListener("click", showCard);

function showCard() {
    console.log("calling the cards")
  let table = document.querySelector(".list_container2")
  let card = document.querySelector(".card_container1");
  let styleCard = getComputedStyle(card);
    if (styleCard.display == "none"){
        card.style.display = "flex"; 
        table.style.display = "none"; 
    }

}


// card.style.display = 'none'; 
//card.forEacch((item) => {
    //item.remove()
//}
//do each diplay nonoe in each function 
