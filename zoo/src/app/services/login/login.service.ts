import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Login } from '../../models/login';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

const url = 'http://localhost:8888/login/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email:String = '';
  password:String = '';

  constructor(private httpClient:HttpClient) { }

  login(email:String, password:String): Observable <any>{
    return this.httpClient.post<any> (url,"email,password"); }
  
}
