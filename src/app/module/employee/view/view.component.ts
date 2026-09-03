import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  employee: any;
  currentId: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.currentId = Number(id);
        this.loadEmployee(this.currentId);
      }
    });
  }

  loadEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: () => {
        this.router.navigate(["/employee"]);
      },
    });
  }

  goPrevious(): void {
    if (this.currentId > 1) {
      this.router.navigate(["/employee/view", this.currentId - 1]);
    }
  }

  goNext(): void {
    this.router.navigate(["/employee/view", this.currentId + 1]);
  }
}
