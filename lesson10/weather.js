const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=ac0808b5f2a4fab6468a23a8bc7770f4";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();