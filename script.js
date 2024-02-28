"use strict";

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

const weekdays = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"sunday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".countdown-box");
const items = document.querySelectorAll(".number");

let today = new Date();
let tempyear = today.getFullYear();
let tempmonth = today.getMonth();
let tempday = today.getDate();
// let future date = new date(2098,8,29,12,04,0);

const futureDate = new Date(tempyear,tempmonth,tempday + 10, 12, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
 const date = futureDate.getDate();

 const weeekday = futureDate.getDay();

 giveaway.textContext = 'Giveaway ends on ${weekday}, ${date}, ${month}, ${year}, ${hours}, ${minutes},pm';
  
 const futuretime = futureDate.getTime();
 // iden tify current time
 function getRemainingtime(){
    const today = new date().getTime();
const timedifference = futuretime - today;
const oneday =24*60*60*1000;
const onehour =60*60*1000;
const oneminute =60*1000 ;

let days = timedifference/oneday;
days=Math.floor(days);
let hours = Math.floor((timedifference%oneday)/onehour);
let minute = Math.floor((timedifference%onehour)/oneminute);
let seconds =Math.floor((timedifference%oneminute)/1000);

//set values in html
const values = [days, hours, minute, seconds];

function format(item){
    if(item<10){
        return(item = '0${item}');
    }
    return item;
}
items.forEach(function(item,index){
    item.innerHTML=values[index];
});
let countdown = setInterval(getRemainingtime,1000);

if (timedifference<=0){
    clearInterval(contdown);
}
}
//identify cuurent time

getRemainingtime();


























