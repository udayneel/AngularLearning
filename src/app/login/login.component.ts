import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username ="Uday";
  Password = ' ';
  errorMsgshow = false;

  constructor(private router: Router){

  }

  handleLogin(){

    if(this.username==="Uday" && this.Password === 'dummy'){
      console.log(this.username);
      console.log(this.Password);
      this.router.navigate(['welcome']);
      this.errorMsgshow = false;
    } else{
      this.errorMsgshow = true;
    }

  }

}
