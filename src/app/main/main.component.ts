import { Component } from '@angular/core';
import { EmployeeComponent } from "./employee/employee.component";
import { EmpmoduleModule } from '../../app/empmodule/empmodule.module';


@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [EmployeeComponent, EmpmoduleModule]
})
export class MainComponent {

}
