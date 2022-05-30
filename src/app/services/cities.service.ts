import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/IResponse';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '../models/City';

const URL = environment.apiBaseUrl + '/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  public getAllCities(): Observable<City[]> {
    return this.http.get<IResponse<City[]>>(`${URL}/list`).pipe(
      map((res) => {
        if (res?.success) {
          return res.data;
        }        
      })
    );
  }

  public getCityDescription(city): Observable<string> {
    return this.http.get<IResponse<any>>(`${URL}/description/${city}`).pipe(
      map((res) => {
        if (res?.success) {
          return res.data.description;
        }
      })
    );
  }
}
