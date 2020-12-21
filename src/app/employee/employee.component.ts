import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employees: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    let res = this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    res.subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
