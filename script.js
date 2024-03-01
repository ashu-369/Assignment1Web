let date = document.querySelector("#date");
let copyright = document.querySelector("#copyright");

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();

function dateUpdation(){
    date.innerText = `Date: ${year}-${month}-${day}`;
    copyright.innerText = `Arshdeep Singh copright@${year}`;
}

window.onload = dateUpdation();