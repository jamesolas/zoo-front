import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AsiaComponent } from './components/asia/asia.component';
import { NorthAmericaComponent } from './components/north-america/north-america.component';
import { SouthAmericaComponent } from './components/south-america/south-america.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { AfricaComponent } from './components/africa/africa.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomeComponent},
  {path: 'Africa', component: AfricaComponent},
  {path: 'Asia', component: AsiaComponent},
  {path: 'North_America', component: NorthAmericaComponent},
  {path: 'South_America', component: SouthAmericaComponent},
  {path: 'navbar1', component: NavbarComponent},
  {path: 'navbar2', component: Navbar2Component}
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
