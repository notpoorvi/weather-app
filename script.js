const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vancouver';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ce9d00410msha96b29ce3fd0077p1e2350jsnc81cc3b65b14',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        const width = 550;
        const height = 480;
        cityImage.src = `https://source.unsplash.com/random/${width}x${height}/?${city} city`
        cityImage.style.width = '550px';
        cityImage.style.height = '380px';
        cityName.innerHTML = `${city}: ${response.feels_like}°C`;
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}    

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let cityName = city.value.trim();
    if (cityName === '') {
        cityName = 'Vancouver';
    }
    getWeather(cityName);
})

getWeather("Vancouver")