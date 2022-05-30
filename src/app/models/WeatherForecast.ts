export class WeatherForecast {
  address: string;
  days: DayForecast[];
  latitude: number;
  longitude: number;
	resolvedAddress: string;
	timezone: string;
	tzoffset: number;
}

export class DayForecast {
  cloudcover: number;
  conditions: string;
  datetime: string;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  sunrise: string;
  sunset: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}