import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator, Logger } from '@ngrx/data';

import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeDataService extends DefaultDataService<Employee> {
	constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
		super('Employee', http, httpUrlGenerator);
		logger.log('Created custom Employee EntityDataService');
	}

	override getAll(): Observable<Employee[]> {
		console.log('Inside EmployeeDataService.getAll() method');
		return super.getAll();
	}
}
