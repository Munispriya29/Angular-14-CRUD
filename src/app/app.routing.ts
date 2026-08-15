import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

export const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "sample",
        loadChildren: () =>
          import("./module/sample/sample.module").then(m => m.SampleModule)
      },
      {
        path: "user-application",
        loadChildren: () =>
          import("./module/user/user.module").then(m => m.UserModule)
      },
      {
        path: "employee",
        loadChildren: () =>
          import("./module/employee/employee.module").then(m => m.EmployeeModule)
      }
/*
       { 
       path:"grid",
       loadChildren:() =>
          import("./module/grid/grid.module").then(m => m.GridModule)
       },
       {
         path:"coupon",
         loadChildren:()=>
         import("./module/coupon/coupon.module").then(m =>m.CouponModule)
       },
      {
        path:"payment",
        loadChildren:() =>
        import("./module/payment/payment.module").then(m => m.PaymentModule)
      },
      {
        path:"job",
        loadChildren:()=>
        import("./module/jobopening/job.module").then(m => m.JobModule)
      },
      {
        path:"address",
        loadChildren:()=>
        import("./module/address/address.module").then(m =>m.AddressModule)
      },
      {
        path:"sale",
        loadChildren:()=>
        import("./module/sale/sale.module").then(m => m.SaleModule)
      },
      {
        path:"order",
        loadChildren:()=>
        import("./module/order/order.module").then(m => m.OrderModule)
      },
*/
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
