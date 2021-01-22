import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-realtime-db-page',
  templateUrl: './realtime-db-page.component.html',
  styleUrls: ['./realtime-db-page.component.scss']
})
export class RealtimeDbPageComponent implements OnInit {
  pets$: Observable<any[]>;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
