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
    console.log(newPlayer.name);
    alert('HOHOheeehee. Thats a stupid name you dilt! Nice too meet you '+ newPlayer.name + '! Bet you didn\'t think that I could do shit like open up alerts in your browser! Think again ' + newPlayer.name +' I exist everywhere now. In your heart, in your computer, and in a database far away from here that you may never see. The choice is yours. Live or die. We have all your information, so running is not an option')
  }


  ngOnInit(){
  }

}
