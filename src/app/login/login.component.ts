import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string = "persona@mail.cl"
  password: string = "123"

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.post(this.mail, this.password).subscribe({
        next: (res)=> console.log(res)
    })
  }
}
