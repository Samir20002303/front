import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { DepartementService } from '../../departement.service';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
  formemploye: any;  

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private employeService: EmployeService,
    private departementService: DepartementService
  ) {
    // Initialisation du formulaire avec validation
    this.formemploye = this.fb.group({
      //id: ['', Validators.required],
      nom: ['', Validators.required],
      photo: [null, Validators.required],
      departement :['', Validators.required],
    
    });
  }

 
  employeData:any
  action:string="Ajouter"
  photo!: File 
  departements: any;

  // Fonction pour ajouter un employé
  ajouteremploye() {
    const employe = {
      // id: this.formemploye.get('id')?.value,
      nom: this.formemploye.get('nom')?.value,
      // email: this.formemploye.get('email')?.value,  // Ajout de l'email
      // dateNaissance: this.formemploye.get('dateNaissance')?.value,  // Ajout de la date de naissance
      photo: this.photo,
      departement: this.formemploye.get('departement')?.value
      
    };
    this.employeService.addEmploye(employe);
  }

  // Fonction pour mettre à jour un employé
  updateemploye(employe: any) {
    this.employeService.updateEmploye(employe);
  }

  ngOnInit(){

    this.departements=this.departementService.departements;
    if (this.action=="Modifier"){
      this.formemploye.setValue(this.employeData)
    }
  }

  actionemploye(){
    if(this.action=="Ajouter"){
      this.ajouteremploye()
    }
    else{
      this.updateemploye(this.formemploye.value)
    }
    this.fermer()
  }
  
  fileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.photo = file;
  }
   //methode pour fermer la modale activée
   fermer(){
    this.activeModal.close()
   }
  }
