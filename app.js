if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let app_id = "fd781890dff9958ecdd0051bfcfeefa6";
    //longitude = Math.round(longitude);
    //latitude = Math.round(latitude);

    let api_data = {};
    const temp_span = document.querySelector(".temp");

    fetch(
      `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=fd781890dff9958ecdd0051bfcfeefa6`
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log(data);
        api_data = data;
      })
      .then(() => {
        temp_span.textContent = Math.round(api_data.main.temp - 272.15);
      });
  });
}
