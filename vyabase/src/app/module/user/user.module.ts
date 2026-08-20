import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { UserIdComponent } from './user-id/user-id.component';

@NgModule({
  declarations: [UserIdComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
