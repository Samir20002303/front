import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeService } from '../employe.service';
import { FormDepartComponent } from '../form-dep/form-dep.component';
import { FormComponent } from '../form/form.component';
import { DeletmodalComponent } from './deletmodal/deletmodal.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 //injection du servise employe
 constructor(private employeService:EmployeService, private modal:NgbModal){}
 employes:any
 ngOnInit() {
   this.employes = this.employeService.employes;
 }

 
 
  deleteemploye(id:number){
   this.employeService.deleteEmploye(id)
 } 
 
  updateemploye(employe:any){
   const ref=this.modal.open(FormComponent)
   ref.componentInstance.employeData=employe
   ref.componentInstance.action="Modifier"
 }
 
 openModal(){
   this.modal.open(FormComponent)
 } 

 openModaldepart(){
  this.modal.open(FormDepartComponent)
} 
 
   
  openDeleteModal(employe:any){
   const ref= this.modal.open(DeletmodalComponent)
    ref.componentInstance.etudiantData=employe
   ref.result.then(result=>{
     if (result=='oui'){
       this.deleteemploye(employe.id)
     }
   }) 
 } 
}