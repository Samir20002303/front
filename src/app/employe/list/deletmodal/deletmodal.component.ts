import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deletmodal',
  standalone: true,
  imports: [],
  templateUrl: './deletmodal.component.html',
  styleUrl: './deletmodal.component.css'
})
export class DeletmodalComponent {
  employes:any
  constructor(public ActiveModal:NgbActiveModal){}

  deleteStudent(id:number){
  
  }
  
fermer(){
  this.ActiveModal.close()
 }
}