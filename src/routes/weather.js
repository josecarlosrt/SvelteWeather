const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42cc5a80d5msh1a8d0951becf766p16fe00jsn44fde2a08d40',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom(query = 'San Pedro Sula') {
    const response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, 
        FETCH_OPTIONS
    );

    const data = await response.json();

    const { location, current } = data;
    const { country, localtime, name } = location;
    const {
        condition,
        humidity,
        feelslike_c,
        is_day,
        temp_c,
        wind_kph, wind_dir
    } = current;
    const { text, icon } = condition;
    
    return {
        conditionText: text,
		conditionIcon: icon,
        country,
        localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
    }
}
