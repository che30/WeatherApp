
const submit = document.querySelector('.submit');
const inputText = document.querySelector('.input_text');
const humidityTitle = document.querySelector('.humidity');
const windSpeedTitle = document.querySelector('.wind-speed');
const cloudsTitle = document.querySelector('.cloud-description');
const temperatureTitle = document.querySelector('.temperature');
async function getData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=49257f6591cfc3ed8daf0b5970d519cb`,
    { mode: 'cors' });
  const result = await response.json();
  return result;
}
const containToggle = document.createElement('div');
containToggle.classList.add('d-flex');
const toggleOne = document.createElement('button');
toggleOne.innerHTML = 'C';
toggleOne.classList.add('display-5');
toggleOne.style.borderRadius = '10px';
toggleOne.style.backgroundColor = '#fcba03';
toggleOne.style.color = '#f54272';
toggleOne.value = 'C';
const toggleTwo = document.createElement('button');
toggleTwo.innerHTML = 'F';
toggleTwo.value = 'F';
toggleTwo.classList.add('display-5');
toggleTwo.style.borderRadius = '10px';
toggleTwo.style.backgroundColor = '#03fc03';
toggleTwo.style.color = '#a503fc';
containToggle.appendChild(toggleTwo);
containToggle.appendChild(toggleOne);

let selected;
let valueSelected;
containToggle.addEventListener('click', e => {
  selected = document.getElementById('current-temp');
  valueSelected = document.getElementById('temp');


  if (e.target.tagName.toLowerCase() === 'button' && e.target.value === 'F') {
    const tempCelcius = Number(valueSelected.value);
    const farenheight = ((tempCelcius * (9 / 5)) + 32).toFixed(2);
    selected.innerHTML = farenheight;
    document.getElementById('celscius').innerHTML = 'F';
    document.querySelector('sup').innerHTML = '';
  }
  if (e.target.tagName.toLowerCase() === 'button' && e.target.value === 'C') {
    selected.innerHTML = valueSelected.value;
    document.getElementById('celscius').innerHTML = 'C';
    document.querySelector('sup').innerHTML = 'o';
  }
});
const body = document.querySelector('body');
body.style.backgroundImage = 'url("./assets/images/clear.jpg")';
function addBackground(data) {
  const body = document.querySelector('body');
  if (data.cod !== '404') {
    switch (data.weather[0].main) {
      case 'Clear':
        body.style.backgroundImage = 'url("./assets/images/clear.jpg")';
        break;
      case 'Clouds':
        body.style.backgroundImage = 'url("./assets/images/cloudy.jpg")';
        break;
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        body.style.backgroundImage = 'url("./assets/images/rain.jpg")';
        break;
      case 'Thunderstorm':
        body.style.backgroundImage = 'url("./assets/images/thunderstorm.jpg")';
        break;
      case 'Snow':
        body.style.backgroundImage = 'url("./assets/images/snow.jpg")';
        break;
      default:
        break;
    }
  }
}
function processData(data) {
  if (data.cod !== '404') {
    document.querySelector('section p').innerHTML =''
    const temperature = document.createElement('p');
    const humidity = document.createElement('p');
    const windSpeed = document.createElement('p');
    const clouds = document.createElement('p');
   
     if( document.querySelector('section  .same')){
       const allSame =document.getElementsByClassName('same')
       let i=0
       while (i<allSame.length ){
        allSame[i].innerHTML =''
        i+=1
       }
     }
    temperature.innerHTML = `<span id="current-temp">
 ${(Number(data.main.temp) - 273).toFixed(2)}
 </span><sup>o</sup><span id="celscius">C</span>`;
    temperature.id = 'temp';
    temperature.value = (Number(data.main.temp) - 273).toFixed(2);
    //  temperature.id = 'current-temp'
    temperature.value = (Number(data.main.temp) - 273).toFixed(2);
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}M/H`;
    clouds.innerHTML = data.weather[0].description;
    temperature.classList.add('same');
    humidity.classList.add('same');
    windSpeed.classList.add('same');
    clouds.classList.add('same');

    temperatureTitle.appendChild(temperature);
    cloudsTitle.appendChild(clouds);
    windSpeedTitle.appendChild(windSpeed);
    humidityTitle.appendChild(humidity);
    temperatureTitle.appendChild(containToggle);
  } else if (data.cod === '404') {
    const notFound = document.querySelector('.not-found');
    notFound.classList.remove('d-none');
    notFound.classList.add('d-block');
  }
}
submit.addEventListener('click', e => {
  e.preventDefault();
  getData().then(data => {
    processData(data);
    addBackground(data);
  });
});