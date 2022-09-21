import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.css']
})
export class NorthAmericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animal: string = '#animal';
  animals: Array<String> = [];

  animalList: boolean = false;
  input:string = '';

  addAnimal(animal: String): void{
    this.animals.push(animal);
    this.animalList = true;
    this.input = '';
  }

  // clearInput(): void{
  //   document.getElementById('animal').value='';
  // }
  
  // showAnimals(): void{
  //   this.animalList = true;
  // }

}
