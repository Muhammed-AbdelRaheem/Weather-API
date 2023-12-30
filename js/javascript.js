
let inputSearch=document.querySelector("#search")
let btnSearch=document.querySelector(".btn")


let date =new Date()
month = date.getMonth()
day =date.getDate()

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// console.log(months[month]);



let alldata=[];


inputSearch.addEventListener("keyup",()=>Getdata( inputSearch.value))
btnSearch.addEventListener("click",()=>Getdata( inputSearch.value))



async function Getdata(country) {

  let myhttp = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=49ea6b3c8cf647829c5225222232812&q=${country}&days=3`
  );

  let res = await myhttp.json();
  alldata = await res;
  document.getElementById("location").innerHTML = alldata.location.name;
  document.querySelector("#num").innerHTML = `${alldata.current.temp_c}` + `°c`;
  document.querySelector("#icon").src = `${alldata.current.condition.icon}`;
  document.querySelector("#text").innerHTML = `${alldata.current.condition.text}`;
  document.querySelector("#wind-dir").innerHTML = `${alldata.current.wind_dir}`;
  document.querySelector("#wind-speed").innerHTML = `${alldata.current.wind_mph}`;
  document.querySelector("#humidity").innerHTML =`${alldata.current.humidity}` + `%`;


  
  forcastTomorrow(alldata)
  forcastAfterTomorrow(alldata)
  setDateNow()
  // console.log(alldata.location.localtime);
  // var timezone=alldata.location.localtime


}


if(inputSearch.value==""){Getdata("cairo")}
Getdata("cairo");


function setDateNow(){

  let date=new Date()
  let daynum =date.getDate()
  let day=date.getDay()
  dayZ=days[day];

  document.querySelector(".day").innerHTML = days[day]
  document.querySelector(".month").innerHTML = ` <span id="day" class="day">${daynum}${months[month]}</span>`

}



function forcastTomorrow(index) {

  for (let i = 1; i < index.forecast.forecastday.length; i++) {

    let img=index.forecast.forecastday[1].day.condition.icon
    let text=index.forecast.forecastday[1].day.condition.text
  
    let date=new Date(index.forecast.forecastday[1].date)
    let daynum =date.getDate()
    let day=date.getDay()
    dayZ=days[day];  
  
  document.querySelector("#icon2").src=`${img}`
  document.querySelector(".date").innerHTML=`${days[day]}`
  document.querySelector(".mx-num").innerHTML=`${index.forecast.forecastday[1].day.maxtemp_c}`+ `°c`
  document.querySelector(".min-num").innerHTML=`${index.forecast.forecastday[1].day.mintemp_c}`+ `°c`
  document.querySelector("#text1").innerHTML=`${index.forecast.forecastday[1].day.condition.text}`
  

  }
//   console.log(index.forecast.forecastday[1].day.mintemp_c);


// console.log(index.forecast.forecastday[1].day);


}




function forcastAfterTomorrow(index) {

  for (let i = 1; i < index.forecast.forecastday.length; i++) {

    let img=index.forecast.forecastday[2].day.condition.icon
    let text=index.forecast.forecastday[2].day.condition.text
  
    let date=new Date(index.forecast.forecastday[2].date)
    let daynum =date.getDate()
    let day=date.getDay()
    dayZ=days[day];  
  
  document.querySelector(".icon2").src=`${img}`
  document.querySelector(".day2").innerHTML=`${days[day]}`
  document.querySelector("#max-num").innerHTML=`${index.forecast.forecastday[2].day.maxtemp_c}`+ `°c`
  document.querySelector("#min-num").innerHTML=`${index.forecast.forecastday[2].day.mintemp_c}`+ `°c`
  document.querySelector("#text2").innerHTML=`${index.forecast.forecastday[2].day.condition.text}`
  

  }




}




