import { Route } from '@angular/router';
import { HomeComponent} from './home/home/home.component';
import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';

export const ROUTES: Route[] = [
  {	path: '', redirectTo: 'courses-page', pathMatch: 'full'},
  {	path: 'home', component: HomeComponent},
  {	path: 'courses-page', component: CoursesPageComponent},
];
