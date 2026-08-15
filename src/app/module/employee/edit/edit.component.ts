// import { Component, OnInit } from "@angular/core";
// import { FormControl, FormGroup } from "@angular/forms";

// @Component({
//   selector: "app-edit",
//   templateUrl: "./edit.component.html",
//   styleUrls: ["./edit.component.scss"],
// })
// export class EditComponent implements OnInit {
//   employeeForm = new FormGroup({
//     name: new FormControl(""),
//     email: new FormControl(""),
//     department: new FormControl(""),
//     salary: new FormControl(""),
//   });

//   constructor() {}

//   ngOnInit(): void {}

//   onSubmit() {
//     console.log(this.employeeForm.value);
//   }
// }


import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  employeeId: any;

  employeeForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    department: new FormControl(""),
    salary: new FormControl(""),
  });

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get("id");

    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((data: any) => {
        this.employeeForm.patchValue(data);
      });
  }

  onSubmit(): void {
    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe((res) => {
        console.log("Updated Successfully", res);
      });
  }
}