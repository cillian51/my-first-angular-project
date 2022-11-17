import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  subtitle:string = 'le projet de ses morts';
  avions:Array<string> =[
    'A-320', 
    'Boeing 747',
    'Air Force 1'
  ]
}
