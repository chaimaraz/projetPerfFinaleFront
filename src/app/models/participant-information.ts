
export class ParticipantInformation {
  id: number;
  cin: string;
  direction: string;
  entreprise: string;
  user:User;
  constructor(){
    this.user=new User();
  }
}
export class User {
  id: number;
  email: string;
  password: string;
  nom: string;
  prenom: string;}
