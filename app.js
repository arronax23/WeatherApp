function wyznaczTemperature() {
  let data_torun = {};
  let data_plock = {};
  const temp_torun = document.querySelector(".temp-torun");
  const temp_plock = document.querySelector(".temp-plock");
  spinner1 = document.createElement("span");
  spinner1.classList.add("spinner-border");
  spinner1.style.display = "inline-block";

  spinner2 = document.createElement("span");
  spinner2.classList.add("spinner-border");
  spinner2.style.display = "inline-block";

  // Toruń
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=3083271&APPID=fd781890dff9958ecdd0051bfcfeefa6"
  )
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data_torun = data;
    })
    .then(() => {
      let temp = Math.round((data_torun.main.temp - 272.15) * 100) / 100;
      temp_torun.textContent = "";
      temp_torun.appendChild(spinner1);    
      console.log("Toruń: ", temp);
      
      setTimeout(() => {
        temp_torun.removeChild(spinner1);
        temp_torun.textContent = temp;
      }, 250);
    });

  // Płock
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=3088825&APPID=fd781890dff9958ecdd0051bfcfeefa6"
  )
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data_plock = data;
    })
    .then(() => {
      let temp = Math.round((data_plock.main.temp - 272.15) * 100) / 100;
      
      temp_plock.textContent = "";
      temp_plock.appendChild(spinner2);    
      console.log("Płock: ", temp);
        
      setTimeout(() => {
        temp_plock.removeChild(spinner2);
        temp_plock.textContent = temp;
      }, 250);
      
    });
}

wyznaczTemperature();

setInterval(wyznaczTemperature, 5000);
