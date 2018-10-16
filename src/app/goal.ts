export class Goal {
    public showGoalDescription:boolean;
    constructor(
        public id:number,
        public name:string,
        public description:string
    ){
        this.showGoalDescription=false
    }
}
