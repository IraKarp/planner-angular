import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResponse } from '../models/IResponse';
import { WeatherForecast } from '../models/WeatherForecast';

const URL = environment.apiBaseUrl + '/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeatherForecast(cityName: string):Observable<WeatherForecast> {
    return this.http.get<IResponse<WeatherForecast>>(`${URL}/${cityName}`).pipe(
      map((res) => {
        if (res?.success) {
          return res.data;
        }
      })
    );
  }
}
