import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AfricaComponent } from './components/africa/africa.component';
import { AsiaComponent} from './components/asia/asia.component';
import { NorthAmericaComponent } from './components/north-america/north-america.component';
import { SouthAmericaComponent } from './components/south-america/south-america.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfricaComponent,
    AsiaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    HomeComponent,
    LoginHomeComponent,
    Navbar2Component
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent
  ]

})
export class AppModule { }
