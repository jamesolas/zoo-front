import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  email: string = "";
  password: string = "";

  login(){
    this.loginService.login(this.email, this.password).subscribe(
      (data) => {
        if(data == null){
          console.log("Please try again.");
          window.alert("Incorrect username or password.");
        }else{
          console.log("Logged in.");
        }
      },
      () => {}
    )
  }

}
