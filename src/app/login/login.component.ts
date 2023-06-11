import { Router } from '@angular/router';
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

  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit() {}

  login() {
    this.loginService.post(this.mail, this.password).subscribe({
        next: (res) => {
          if(res) this.route.navigate(["/exito-login"])
          else alert("error mail o contraseña incorrecta")
        }
    })
  }
}
