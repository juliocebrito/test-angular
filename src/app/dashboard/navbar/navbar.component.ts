import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
     console.log(this.sidenav.opened);
     if (this.sidenav.opened) {
       this.sidenav.close()
     } else {
       this.sidenav.open()
     }
  }

}
