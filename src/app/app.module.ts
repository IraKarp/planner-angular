import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CityInfoComponent } from './pages/city-info/city-info.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CityInfoComponent,
    CitiesListComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],   //!!!
  bootstrap: [AppComponent]
})
export class AppModule {}
