import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pet } from 'src/models';


@Component({
  selector: 'app-cloud-firestore-page',
  templateUrl: './cloud-firestore-page.component.html',
  styleUrls: ['./cloud-firestore-page.component.scss']
})
export class CloudFirestorePageComponent implements OnInit {
  pets$: Observable<Pet>

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
