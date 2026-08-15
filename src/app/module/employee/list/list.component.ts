/*
import { Component, OnInit } from '@angular/core';
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  employees = [
    {
      id: 1,
      name: "Priya",
      email: "priya@gmail.com",
      department: "IT",
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
      department: "HR",
      salary: 30000,
    },
    {
      id: 3,
      name: "Kaviya",
      email: "kaviya@gmail.com",
      department: "Finance",
      salary: 40000,
    },
    {
      id: 4,
      name: "Rahul",
      email: "rahul@gmail.com",
      department: "Admin",
      salary: 50000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
*/

import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }
}
