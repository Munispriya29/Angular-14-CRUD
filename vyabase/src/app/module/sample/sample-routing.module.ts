/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    path: '',
    component: SampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule {}
