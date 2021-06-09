import { Component, VERSION } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private serviceEmployee: EmployeeService) {}
  ngOnInit() {
    this.test().then(data => {
      console.log(data);
      console.log('nissrine');
    });
  }
  test() {
    return new Promise((resolve, reject) => {
      this.serviceEmployee.getEmployees().subscribe(data => {
        resolve(data);
      });
    });
  }
}
