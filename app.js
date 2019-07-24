function wyznaczTemperature() {
  let data_torun = {};
  let data_plock = {};
  const temp_torun = document.querySelector(".temp-torun");
  const temp_plock = document.querySelector(".temp-plock");
  const spinnerBorder = document.querySelector(".spinner-border");

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
      temp_torun.textContent = temp;
      console.log("Toruń: ", temp);
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
      temp_plock.textContent = temp;
      console.log("Płock: ", temp);
      spinnerBorder.style.display = "inline-block";
      setTimeout(() => {
        spinnerBorder.style.display = "none";
      }, 1000);
    });
}

wyznaczTemperature();

setInterval(wyznaczTemperature, 10000);
