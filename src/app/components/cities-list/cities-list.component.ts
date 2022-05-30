import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/helpers/base/base.component';
import { City } from 'src/app/models/City';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent extends BaseComponent implements OnInit {
  public citiesList: City[];

  constructor(private citiesService: CitiesService) {
    super();
  }

  ngOnInit() {
    this.citiesService
      .getAllCities()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((list) => (this.citiesList = list));
  }
}
