import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit = () => {
    let uname = <HTMLInputElement> document.getElementById("username");
    let username = uname.value;
    let upassword = <HTMLInputElement> document.getElementById("password");
    let password = upassword.value;
    if(username == "admin" && password == "admin"){
      this.route.navigate(["admin-dashboard"]);
    }
    else{
      alert("Invalid Details");
    }
  }

}
