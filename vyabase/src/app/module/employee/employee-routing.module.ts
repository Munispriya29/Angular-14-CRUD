import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  // Navigating to /employee directly opens ListComponent
  { path: "", component: ListComponent },

  // Navigating to /employee/list also opens ListComponent
  { path: "list", component: ListComponent },

  // Navigating to /employee/add opens AddComponent
  { path: "add", component: AddComponent },

  // Navigating to /employee/edit/:id opens EditComponent
  { path: "edit/:id", component: EditComponent },

  // Navigating to /employee/view/:id opens ViewComponent
  { path: "view/:id", component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
