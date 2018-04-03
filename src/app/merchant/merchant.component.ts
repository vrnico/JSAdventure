import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
  providers: [PlayerService]
})
export class MerchantComponent implements OnInit {
  players: FirebaseListObservable<any[]>;


  constructor(private router: Router, private playerService: PlayerService) { }

  submitForm(name:string){
    var newPlayer: Player = new Player(name);
    this.playerService.addPlayer(newPlayer);
    console.log(newPlayer);
  }


  ngOnInit(){
  this.players = this.playerService.getPlayers();
  }

}
