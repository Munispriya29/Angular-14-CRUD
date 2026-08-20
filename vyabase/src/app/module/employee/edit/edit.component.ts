import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  employeeId: any;
  isSubmitted: boolean = false;

  employeeForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    department: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required, Validators.min(1)]),
  });

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get("id");
    if (this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (data: any) => {
          this.employeeForm.patchValue({
            name: data.name,
            email: data.email,
            department: data.department || data.dept,
            salary: data.salary,
          });
        },
        error: (err: any) => {
          console.error("Error fetching employee:", err);
          this.router.navigate(["/employee"]);
        },
      });
    }
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe({
        next: (res: any) => {
          console.log("Updated Successfully:", res);
          this.router.navigate(["/employee"]);
        },
        error: (err: any) => {
          console.error("Error updating employee:", err);
        },
      });
  }
}
