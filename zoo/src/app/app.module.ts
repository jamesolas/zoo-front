import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AfricaComponent } from '../components/africa/africa.component';
import { AsiaComponent} from '../components/asia/asia.component';
import { NorthAmericaComponent } from 'src/components/north-america/north-america.component';
import { SouthAmericaComponent } from 'src/components/south-america/south-america.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AfricaComponent,
    AsiaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent
  ]

})
export class AppModule { }
