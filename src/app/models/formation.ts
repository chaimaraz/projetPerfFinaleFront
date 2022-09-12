import { User } from 'src/app/models/user';



import { Cycle } from './../cycle';




export class Formation {
  constructor(
    public id?:number,
    public registeredDate?: Date,
    public cycle?:Cycle,
    public user?:User
  ){
  }
}
