import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityInfoComponent } from './pages/city-info/city-info.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'city-info/:cityName', component: CityInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
