import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [PlayerService]
})
export class GameComponent implements OnInit {
  playerToDisplay;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.playerToDisplay = this.playerService.getPlayerById();
    console.log(this.playerName);
  }

}
