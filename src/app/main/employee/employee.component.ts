import { Component } from '@angular/core';
import { EmpmoduleModule } from '../../empmodule/empmodule.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../shered/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmpmoduleModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor( public emp:EmployeeService){}
  
}
