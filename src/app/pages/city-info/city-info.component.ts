import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/helpers/base/base.component';
import { DayForecast, WeatherForecast } from 'src/app/models/WeatherForecast';
import { CitiesService } from 'src/app/services/cities.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent extends BaseComponent implements OnInit {
  public cityName: string;
  public cityDescription: string;
  public weatherForecast: WeatherForecast;
  public todayForecast: DayForecast;
  public wikiLink: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private citiesService: CitiesService,
    private weatherService: WeatherService
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.cityName = params.cityName; //??
        this.wikiLink = `https://en.wikipedia.org/wiki/${params.cityName}`;

        this.getCityDescription(params.cityName);
        this.getWeatherForecast(params.cityName);
      });
  }

  private getCityDescription(name: string) {
    this.citiesService
      .getCityDescription(name)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((description) => {
        this.cityDescription = description;
      });
  }

  private getWeatherForecast(name: string) {
    this.weatherService
      .getWeatherForecast(this.cityName)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.todayForecast = data.days[0];
        this.weatherForecast = data;
      });
  }
}
