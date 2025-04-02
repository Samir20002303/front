import { Departement } from "../departement.model";

export interface employe{
    id : number
    nom : string 
    email : string
    photo: string; 
    dateNaissance : string
    departement: Departement;
}

