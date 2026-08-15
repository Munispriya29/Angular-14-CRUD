import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeeRoutingModule } from "./employee-routing.module";
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./view/view.component";

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, ViewComponent],
  imports: [CommonModule, EmployeeRoutingModule, ReactiveFormsModule],
})
export class EmployeeModule {}
