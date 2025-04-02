import { Component } from '@angular/core';
import { EmployeComponent } from './employe/employe.component';

@Component({
  selector: 'app-root',
  imports: [EmployeComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontEmploye';
}
