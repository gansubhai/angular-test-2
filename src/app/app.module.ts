import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { Task1Component } from './landing/pages/task1/task1.component';
import { Task2Component } from './landing/pages/task2/task2.component';
import { Task3Component } from './landing/pages/task3/task3.component';
import { Task4Component } from './landing/pages/task4/task4.component';
import appRoutes from './routerConfig';
import { ChildComponent } from './landing/pages/task2/child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
