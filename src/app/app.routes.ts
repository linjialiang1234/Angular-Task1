import { Route } from '@angular/router';
import { HomeComponent} from './home/home/home.component';
import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page/add-course-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { EditCourseComponent } from './edit-course/edit-course/edit-course.component';
export const ROUTES: Route[] = [
  {	path: '', redirectTo: '/courses', pathMatch: 'full'},
  {	path: 'home', component: HomeComponent},
  {	path: 'courses', component: CoursesPageComponent},
  {	path: 'courses/new', component: AddCoursePageComponent},
  { path: 'courses/:id', component: EditCourseComponent},
  { path: 'login', component: LoginPageComponent},
  { path: '**', component: PageNotFoundComponent}
];
