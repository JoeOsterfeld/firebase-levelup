import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    'Realtime DB', 'Cloud Firestore', 'Auth'
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickPage(pageName: string) {
    this.router.navigate
  }

}
