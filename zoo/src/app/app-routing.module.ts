import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AsiaComponent } from 'src/components/asia/asia.component';
import { NorthAmericaComponent } from 'src/components/north-america/north-america.component';
import { SouthAmericaComponent } from 'src/components/south-america/south-america.component';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from 'src/components/home/home.component';
import { AfricaComponent } from 'src/components/africa/africa.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomeComponent},
  {path: 'Africa', component: AfricaComponent},
  {path: 'Asia', component: AsiaComponent},
  {path: 'North_America', component: NorthAmericaComponent},
  {path: 'South_America', component: SouthAmericaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserModule,
            BrowserAnimationsModule,
            MatSelectModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
