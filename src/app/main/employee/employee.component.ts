import { Component } from '@angular/core';
import { EmpmoduleModule } from '../../empmodule/empmodule.module';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmpmoduleModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
