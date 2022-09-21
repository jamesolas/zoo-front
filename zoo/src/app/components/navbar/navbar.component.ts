import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
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
    {value:'', viewValue:''},
    {value:'Africa', viewValue:'Africa'},
    {value:'Asia', viewValue:'Asia'},
    {value:'North_America', viewValue:'North America'},
    {value:'South_America', viewValue:'South America'}
  ];

  navigateTo(value){
    this.router.navigate([value]);
  }

selected: String = '';

  @ViewChild('matRef') matRef:MatSelect;
  clearSelection(){
    console.log("clear");
    // this.regions.keys = '';
  }

}
