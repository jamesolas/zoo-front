import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Region{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regions: Region[] = [
    {value:'Africa', viewValue:'Africa'},
    {value:'Asia', viewValue:'Asia'},
    {value:'North_America', viewValue:'North America'},
    {value:'South_America', viewValue:'South America'},
  ];

  navigateTo(value){
    console.log(value)
    this.router.navigate([value]);
  }

}
