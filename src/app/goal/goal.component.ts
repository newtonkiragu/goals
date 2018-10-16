import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'I am a funky monkey', 'this is not really a goal, just a comment'),
    new Goal(2, 'do some stuff here and there', 'there is a lotta stuff to be done'),
    new Goal(3, 'read eleven minutes', 'cause i am still at page 43 and i have two novels to read'),
    new Goal(4, 'read twelve minutes', 'this is a non existent book'),
    new Goal(5, 'read thirteen minutes', 'this goal might never be attained'),
    new Goal(6, 'read fourteen minutes', 'this sounds like a grammatical error')
  ]
  toggleDetails(index){
    this.goals[index].showGoalDescription = !this.goals[index].showGoalDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
