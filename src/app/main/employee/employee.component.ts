import { Component } from '@angular/core';
import { EmpmoduleModule } from '../../empmodule/empmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../shered/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmpmoduleModule, ReactiveFormsModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor( public emp:EmployeeService){}
  department= [
     {id:1, name:'Angualr'},
     {id:1, name:'JavaScript'},
     {id:1, name:'Bootstrap'},
     {id:1, name:'Node.js'},
     {id:1, name:'Material UI'},
     {id:1, name:'React.js'},
  ]
  
  onClear(){
    this.emp.form.reset();
    this.emp.initializeFormGroup();
  }
}
