
const myWeatherAppKey = "e43c6a9c608160bd434f33afdbddb04c"
const submit = document.querySelector('.submit')
const input_text = document.querySelector('.input_text')
const humidityTitle= document.querySelector('.humidity')
const windSpeedTitle = document.querySelector('.wind-speed')
const cloudsTitle = document.querySelector('.cloud-description')
const temperatureTitle = document.querySelector('.temperature')
const btOne = document.getElementById('btn-1')
const btTwo = document.getElementById('btn-2')
async function getData(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_text.value}&appid=49257f6591cfc3ed8daf0b5970d519cb`,
    { mode: 'cors' });
     const result = await response.json()
    return result
  
}
// btTwo.addEventListener('click',()=>{

// })
const containToggle = document.createElement('div')
containToggle.classList.add('d-flex')
const toggleOne = document.createElement('button')
toggleOne.innerHTML = 'C'
toggleOne.value ='C'
const toggleTwo =document.createElement('button')
toggleTwo.innerHTML = 'F'
toggleTwo.value = 'F'
containToggle.appendChild(toggleTwo)
containToggle.appendChild(toggleOne)
let selected
let valueSelected
containToggle.addEventListener('click',e=>{
  selected =document.getElementById('current-temp')
  valueSelected = document.getElementById('temp')


   if(e.target.tagName.toLowerCase()==='button'&& e.target.value==='F' )
{  const tempCelcius = Number(valueSelected.value)
   
  let farenheight 
  farenheight = ((tempCelcius*(9/5))+32).toFixed(2)
  selected.innerHTML = farenheight
  // console.log( tempCelcius)

}
if(e.target.tagName.toLowerCase()==='button'&& e.target.value==='C' ){
selected.innerHTML = valueSelected.value
}
})
function processData(data){
// console.log(data)
const temperature = document.createElement('p')
const humidity = document.createElement('p')
const windSpeed = document.createElement('p')
const clouds = document.createElement('p')

 temperature.innerHTML = `<span id="current-temp">${(Number(data.main.temp)-273).toFixed(2)}</span><sup>O</sup>C`
 temperature.id ='temp'
 temperature.value =(Number(data.main.temp)-273).toFixed(2)
//  temperature.id = 'current-temp'
 temperature.value = (Number(data.main.temp)-273).toFixed(2)
 humidity.innerHTML = data.main.humidity
 windSpeed.innerHTML = data.wind.speed
 clouds.innerHTML =data.weather[0].description

 temperatureTitle.appendChild(temperature)
 cloudsTitle.appendChild(clouds)
 windSpeedTitle.appendChild(windSpeed)
 humidityTitle.appendChild(humidity)
 temperatureTitle.appendChild(containToggle)
//  console.log( document.querySelector('.temperature'))
}
submit.addEventListener('click', e=>{
  e.preventDefault()
 getData().then(data => processData(data)
 )
 

  
})
/* <h1 class="name" id="name"></h1>
<p class="temp"></p>
<p class="clouds"></p>
<p class="desc"></p> */