import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {

}
