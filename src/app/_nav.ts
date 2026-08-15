import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer'
  // },
  {
    title: true,
    name: "Sample"
  },
  {
    name: "Sample",
    url: "/sample",
    icon: "icon-pencil"
  },
  {
    name: "User Application",
    url: "/user-application",
    icon: "icon-pencil"
  },
  {
  name: "Employee List",
  url: "/employee/list",
  icon: "icon-people"
  },
  {
  name: "Add Employee",
  url: "/employee/add",
  icon: "icon-user-follow"
  }
/*
  {
    name:"Grid application",
    url:"/grid",
    icon:"icon-pencil"
  },
  {
    name:"Coupon",
    url:"/coupon",
    icon:"icon-pencil"
  },
  {
    name:"Payment",
    url:"/payment",
    icon:"icon-pencil"
  },
  {
    name:"Job Opening",
    url:"/job",
    icon:"icon-pencil"
  },
  {
    name:"Address",
    url:"/address",
    icon:"icon-star"
  },
  {
    name:"Sale",
    url:"/sale",
    icon:"icon-pencil"
  },
  {
    name:"Order",
    url:"/order",
    icon:"icon-pencil",
    children:[
      
      {
        name:"OrderPipeLine",
        url:"/orderpipeline",
        icon:"icon-layers",
      },
      {
        name:"OrderLedger",
        url:"/orderledger",
        icon:"icon-layers"

      }
    ]
  }
*/
];
