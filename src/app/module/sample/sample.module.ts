/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SampleRoutingModule } from "./sample-routing.module";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
  declarations: [SampleComponent],
  imports: [CommonModule, SampleRoutingModule],
})
export class SampleModule {}
