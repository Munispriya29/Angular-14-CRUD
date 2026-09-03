import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  isSubmitted: boolean = false;

  // Reactive FormGroup with field validators
  employeeForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    department: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required, Validators.min(1)]),
  });

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    // Stop execution if form is empty or invalid
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.employeeService.addEmployee(this.employeeForm.value).subscribe({
      next: (res) => {
        console.log("Saved Successfully:", res);
        this.router.navigate(["/employee"]);
      },
      error: (err) => {
        console.error("Error saving employee:", err);
      },
    });
  }
}
