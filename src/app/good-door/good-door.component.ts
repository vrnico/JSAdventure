import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-good-door',
  templateUrl: './good-door.component.html',
  styleUrls: ['./good-door.component.css']
})
export class GoodDoorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
