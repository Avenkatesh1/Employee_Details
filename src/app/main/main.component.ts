import { Component } from '@angular/core';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [EmployeeComponent]
})
export class MainComponent {

}
