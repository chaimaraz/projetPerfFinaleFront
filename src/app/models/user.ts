export class User {
  id: number;
  email: string;
  password: string;
  nom: string;
  prenom: string;

  role: ERole;

  infosSupp: ParticipantInformation;

  constructor(){
    this.infosSupp = new ParticipantInformation();
  }
}

export enum ERole {
  ADMIN= 'ADMIN',
  PARTCIPANT = 'PARTICIPANT'
}



export class ParticipantInformation {
  cin: string;
  direction: string;
  entreprise: string;





}

