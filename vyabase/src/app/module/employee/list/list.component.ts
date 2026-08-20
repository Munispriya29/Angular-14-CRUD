import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../service/employee.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  employees: any[] = [];
  isDropdownOpen: boolean = false;
  viewMode: "table" | "card" = "table"; // Toggle between table and square card view
  deleteSuccessMessage: string = "";

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  setViewMode(mode: "table" | "card"): void {
    this.viewMode = mode;
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    const isConfirmed = confirm(
      `Are you sure you want to delete employee record #${id}?`,
    );
    if (isConfirmed) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.deleteSuccessMessage = `Employee #${id} was deleted successfully!`;
          this.getEmployees();
          setTimeout(() => {
            this.deleteSuccessMessage = "";
          }, 3500);
        },
        error: (err) => {
          console.error("Error deleting record:", err);
        },
      });
    }
  }

  getActiveDepartmentsCount(): number {
    if (!this.employees || this.employees.length === 0) {
      return 0;
    }
    const departments = this.employees
      .map((emp) => emp.department || emp.dept)
      .filter((dept) => dept && dept.trim() !== "");

    return new Set(departments).size;
  }
}
