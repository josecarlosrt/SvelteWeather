<script>
	import { loop_guard } from "svelte/internal";
	import { getWeatherFrom } from "./weather.js";
	import WeatherIcon from "../components/weather-icon.svelte";

	const weatherPromise = getWeatherFrom();
</script>

<div class="container">
	{#await weatherPromise then weather}
	<section>
	<div class="weather-icon"><WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} /></div>
	<div class="weather-location">{weather.locationName}</div>
	<div class="weather-temp">{weather.temperature}°<span class="celsius-c">c</span></div>
	<div class="weather-info">
		<div class="weather-sensation">
		<span>Sensation:</span>
		<span>{weather.conditionText}</span>
		</div>
		<div class="weather-windspeed">
		<span>Wind Speed:</span>
		<span>{weather.windSpeed}</span>
		</div>
		<div class="weather-winddirection">
		<span>Wind Direction:</span>
		<span>{weather.windDir}</span>
		</div>
	</div>
	  </section>
	{/await}
</div>

<style>
.weather-location {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}

.weather-temp {
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.weather-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px;
}

.weather-sensation span:first-child,
.weather-windspeed span:first-child,
.weather-winddirection span:first-child {
  font-weight: 600;
}

.celsius-c {
    font-size: 2rem;
    vertical-align: text-top;
}

.weather-icon {
    display: block;
    margin: 0 auto;
    text-align: center;
}


@media only screen and (max-width: 480px) {
.weather-location {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .weather-temp {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .weather-info {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .weather-sensation,
  .weather-windspeed,
  .weather-winddirection {
    margin-bottom: 5px;
  }
}
</style>
