import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartementService } from '../../departement.service';

@Component({
  selector: 'app-form-dep',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-dep.component.html',
  styleUrls: ['./form-dep.component.css']
})
export class FormDepartComponent {
  formdepart:any
  constructor(private activeModal : NgbActiveModal, private fb:FormBuilder, private departementService:DepartementService){
    this.formdepart=this.fb.group({
      nom :['',Validators.required],
    })
   }
   
   addDepartement():void{
    const nom = this.formdepart.get('nom')?.value;
    this.departementService.addDepartement(nom);  
    this.fermer();
    }

   fermer(){
    this.activeModal.close()
   }

}