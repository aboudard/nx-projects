import { Component } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'nx-projects-all-employees',
	templateUrl: './all-employees.component.html',
	styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent {
	employees$: Observable<Employee[]> | undefined;

	constructor(private employeeService: EmployeeService) {
		this.employees$ = employeeService.getAll();
	}
}
