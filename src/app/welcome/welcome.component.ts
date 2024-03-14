import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  message =" Welcome to this page";

  constructor(private router: Router){

  }


  showme(){
    console.log("message");
    this.router.navigate(['/welcomevip']);

    this.router.navigate(['welcome']);
  }


}
