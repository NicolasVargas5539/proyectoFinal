import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    .container-fluid{
      background-color: rgba(18, 18, 18, 0.8);
    }
    .nav-link{
      color:  rgb(112, 112, 112);
    }
    .active{
      color: rgb(188, 188, 188) !important;
      font-weight: 700;
    }
    .navbar-brand{
      color: rgb(188, 188, 188) !important;
      font-weight: 700;
    }
    `
  ]
})
export class SidebarComponent{

  constructor() { }

}
