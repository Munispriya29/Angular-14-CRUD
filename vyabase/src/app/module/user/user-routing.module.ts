/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserIdComponent } from "./user-id/user-id.component";

// import { Component } from './sample/sample.component';

const routes: Routes = [
   {
     path: '',
     component: UserIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
