


import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Departement } from "./departement.model";

@Injectable({
  providedIn: 'root'
})

export class DepartementService{

    constructor(private http:HttpClient){
        this.getdepartement()
    }
    departements=signal<Departement[]>([])
    backendUrl="http://localhost:8080/departements"
    getdepartement(): void {
       this.http.get<Departement[]>(this.backendUrl).subscribe(data=>{
        this.departements.set(data)
      }, error => {
        console.error("🚨 Erreur récupération departements :", error);
      }
    );
    } 

  
    addDepartement(nom: string): void {
        const departement = { nom }; 
    
        this.http.post<Departement>(this.backendUrl, departement).subscribe(newDepartement => {
          this.departements.update(state => [...state, newDepartement]);
        });
      }


}