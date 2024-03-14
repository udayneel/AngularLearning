import { Component } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent {

  todos = [

      {id:1, description:"I am rock"},      
      {id:2, description:"I am rocky"},
      {id:3, description:"I am rockybhai"},

  ]

}
