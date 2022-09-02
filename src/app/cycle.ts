import { Formateur } from "./formateur";

export class Cycle {
    constructor(
        public idCycle ?: number,
        public entrprise? :String,
        public numAction?:number,
        public theme?:String,
        public lieu?:String,
        public dateDebut?:Date,
        public dateFin?:Date,
        public heureDebut?:String,
        public duree?:String,
        public pause?:String,
        public mode?:String,
        public choix?:String,
        public gouvernorat?:String,
        public numSalle?:String,
        public formateur?:Formateur

    ){}
    
    
}
