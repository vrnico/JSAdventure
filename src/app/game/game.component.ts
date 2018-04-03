import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [PlayerService]
})
export class GameComponent implements OnInit {
  PlayerId: string;
  PlayerToDisplay;


  constructor(private route: Router, private location: Location, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.PlayerId = urlParameters['id'];
   });
   this.PlayerToDisplay = this.PlayerService.getPlayerById(this.PlayerId);
  }

}
