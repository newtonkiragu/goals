import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'I am a funky monkey'),
    new Goal(2, 'do some stuff here and there'),
    new Goal(3, 'read eleven minutes'),
    new Goal(4, 'read twelve minutes'),
    new Goal(5, 'read thirteen minutes'),
    new Goal(6, 'read fourteen minutes')
  ]
  constructor() { }

  ngOnInit() {
  }

}
