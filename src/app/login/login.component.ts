import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient) {
    this.http.get(' http://localhost:8000/api/login').subscribe(data => console.log(data)) ;

  }

  ngOnInit(): void {
  }

  login(): void {
    

  }
}