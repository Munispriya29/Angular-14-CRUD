import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ToastrModule } from 'ngx-toastr';

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
// @ts-ignore TS6133
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
// import { AngularSlickgridModule } from 'angular-slickgrid';
// import { GridContentComponent } from './module/grid/grid-content/grid-content.component';

// @ts-ignore TS6133
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppComponent } from "./app.component";

// Import containers
import { DefaultLayoutComponent } from "./containers";

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppFooterModule,
  AppHeaderModule,
  AppSidebarModule,
} from "@coreui/angular";

// Import routing module
import { AppRoutingModule } from "./app.routing";

// Import 3rd party components
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { TabsModule } from "ngx-bootstrap/tabs";
/*
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from './module/grid/grid.module';
import { CouponModule } from './module/coupon/coupon.module';
import { PaymentModule } from './module/payment/payment.module';
import { JobModule } from './module/jobopening/job.module';
import { AddressModule } from './module/address/address.module';
import { SaleModule } from './module/sale/sale.module';
import { OrderModule } from './module/order/order.module';
*/

// import { AddComponent } from './grid-content/add/add.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    /*
    ReactiveFormsModule,
    GridModule,
    CouponModule,
    PaymentModule,
    JobModule,
    ToastrModule.forRoot(),
    AddressModule,
    SaleModule,
    OrderModule,
*/

    // AngularSlickgridModule.forRoot(),

    HttpClientModule,
    ModalModule.forRoot(),
  ],
  declarations: [AppComponent, ...APP_CONTAINERS],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

