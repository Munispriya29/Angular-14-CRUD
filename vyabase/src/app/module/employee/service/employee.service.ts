// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";

// @Injectable({
//   providedIn: "root",
// })
// export class EmployeeService {
//   apiUrl = "http://localhost:3000/persons";

//   constructor(private http: HttpClient) {}

//   addEmployee(data: any) {
//     return this.http.post(this.apiUrl, data);
//   }
//   getEmployees() {
//     return this.http.get(this.apiUrl);
//   }
// }

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  apiUrl = "http://localhost:3000/persons";

  
  constructor(private http: HttpClient) {}

  // ADD Employee
  addEmployee(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // GET all Employees
  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  // GET Employee by ID
  getEmployeeById(id: number) {
    return this.http.get(this.apiUrl + "/" + id);
  }

  // UPDATE Employee
  updateEmployee(id: number, data: any) {
    return this.http.put(this.apiUrl + "/" + id, data);
  }

  // DELETE Employee
  deleteEmployee(id: number) {
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
