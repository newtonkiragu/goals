import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'I am a funky monkey', 'this is not really a goal, just a comment', new Date(2018,3,14)),
    new Goal(2, 'do some stuff here and there', 'there is a lotta stuff to be done', new Date(2018,6,9)),
    new Goal(3, 'read eleven minutes', 'cause i am still at page 43 and i have two novels to read', new Date(2018,1,12)),
    new Goal(4, 'read twelve minutes', 'this is a non existent book', new Date(2018,0,18)),
    new Goal(5, 'read thirteen minutes', 'this goal might never be attained', new Date(2018,2,14)),
    new Goal(6, 'read fourteen minutes', 'this sounds like a grammatical error', new Date(2018,3,14))
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
