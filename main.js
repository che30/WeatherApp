(()=>{const e=document.querySelector(".submit"),t=document.querySelector(".input_text"),n=document.querySelector(".humidity"),a=document.querySelector(".wind-speed"),s=document.querySelector(".cloud-description"),c=document.querySelector(".temperature"),d=document.createElement("div");d.classList.add("d-flex");const o=document.createElement("button");o.innerHTML="C",o.classList.add("display-5"),o.style.borderRadius="10px",o.style.backgroundColor="#fcba03",o.style.color="#f54272",o.value="C";const r=document.createElement("button");let u,l;r.innerHTML="F",r.value="F",r.classList.add("display-5"),r.style.borderRadius="10px",r.style.backgroundColor="#03fc03",r.style.color="#a503fc",d.appendChild(r),d.appendChild(o),d.addEventListener("click",(e=>{if(u=document.getElementById("current-temp"),l=document.getElementById("temp"),"button"===e.target.tagName.toLowerCase()&&"F"===e.target.value){const e=(1.8*Number(l.value)+32).toFixed(2);u.innerHTML=e,document.getElementById("celscius").innerHTML="F",document.querySelector("sup").innerHTML=""}"button"===e.target.tagName.toLowerCase()&&"C"===e.target.value&&(u.innerHTML=l.value,document.getElementById("celscius").innerHTML="C",document.querySelector("sup").innerHTML="o")})),document.querySelector("body").style.backgroundImage='url("./assets/images/clear.jpg")',e.addEventListener("click",(e=>{e.preventDefault(),async function(){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t.value}&appid=49257f6591cfc3ed8daf0b5970d519cb`,{mode:"cors"});return await e.json()}().then((e=>{!function(e){if("404"!==e.cod){document.querySelector("section p").innerHTML="";const t=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),u=document.createElement("p");if(document.querySelector("section  .same")){const e=document.getElementsByClassName("same");let t=0;for(;t<e.length;)e[t].innerHTML="",t+=1}t.innerHTML=`<span id="current-temp">\n ${(Number(e.main.temp)-273).toFixed(2)}\n </span><sup>o</sup><span id="celscius">C</span>`,t.id="temp",t.value=(Number(e.main.temp)-273).toFixed(2),t.value=(Number(e.main.temp)-273).toFixed(2),o.innerHTML=`${e.main.humidity}%`,r.innerHTML=`${e.wind.speed}M/H`,u.innerHTML=e.weather[0].description,t.classList.add("same"),o.classList.add("same"),r.classList.add("same"),u.classList.add("same"),c.appendChild(t),s.appendChild(u),a.appendChild(r),n.appendChild(o),c.appendChild(d)}else if("404"===e.cod){const e=document.querySelector(".not-found");e.classList.remove("d-none"),e.classList.add("d-block"),setTimeout((()=>{window.location.reload()}),3e3)}}(e),function(e){const t=document.querySelector("body");if("404"!==e.cod)switch(e.weather[0].main){case"Clear":t.style.backgroundImage='url("./assets/images/clear.jpg")';break;case"Clouds":t.style.backgroundImage='url("./assets/images/cloudy.jpg")';break;case"Rain":case"Drizzle":case"Mist":t.style.backgroundImage='url("./assets/images/rain.jpg")';break;case"Thunderstorm":t.style.backgroundImage='url("./assets/images/thunderstorm.jpg")';break;case"Snow":t.style.backgroundImage='url("./assets/images/snow.jpg")'}}(e)}))}))})();