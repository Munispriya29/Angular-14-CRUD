import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    department: new FormControl(""),
    salary: new FormControl(""),
  });

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.employeeService
      .addEmployee(this.employeeForm.value)
      .subscribe((res) => {
        console.log("Saved Successfully", res);
      });
  }
}
