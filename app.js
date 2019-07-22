setInterval(() => {
  let data_torun = {};
  let data_plock = {};
  const temp_torun = document.querySelector(".temp-torun");
  const temp_plock = document.querySelector(".temp-plock");

  // Toruń
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=3083271&APPID=fd781890dff9958ecdd0051bfcfeefa6"
  )
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data_torun = data;
    })
    .then(() => {
      temp_torun.textContent = Math.round(data_torun.main.temp - 272.15);
      console.log("Toruń: ", Math.round(data_torun.main.temp - 272.15));
    });

  // Płock
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=3088825&APPID=fd781890dff9958ecdd0051bfcfeefa6"
  )
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      data_plock = data;
    })
    .then(() => {
      temp_plock.textContent = Math.round(data_plock.main.temp - 272.15);
      console.log("Płock: ", Math.round(data_plock.main.temp - 272.15));
    });
}, 10000);
