import { Component } from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goal = 'Watch finding Nemo';
  goals = [
    new Goal(1, 'I am a funky monkey'),
    new Goal(2, 'do some stuff here and there'),
    new Goal(3, 'read eleven minutes'),
    new Goal(4, 'read twelve minutes'),
    new Goal(5, 'read thirteen minutes'),
    new Goal(6, 'read fourteen minutes')
  ]
}
