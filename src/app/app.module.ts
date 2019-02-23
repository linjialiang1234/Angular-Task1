import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { HomeModule } from './home/home.module';
import { LoginPageModule } from './login-page/login-page.module';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CoursesService } from './courses.service';
import { AuthorizationService } from './authorization.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { EditCourseModule } from './edit-course/edit-course.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Resolver } from './resolver';
import { AuthInterceptor} from './auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModule,
    HomeModule,
    LoginPageModule,
    AddCoursePageModule,
    RouterModule.forRoot(ROUTES),
    PageNotFoundModule,
    EditCourseModule,
    HttpClientModule
  ],
  providers: [CoursesService, AuthorizationService, Resolver, 
  {
     provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
