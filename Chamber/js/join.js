// JOIN PAGE GET DATE

document.querySelector('#date').value = date;
const date2 = new Date();
const dateTime=
date.getMonth() +'/'+
date.getDate()+'/'+
date.getFullYear() +''+
date.getHours()+':'+
date.getMinutes() +':'+
date.getSeconds()