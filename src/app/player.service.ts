import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  player: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
  this.player = database.list('player');
}
  getPlayers() {
    return this.player;
  }

  addPlayer(newPlayer: Player) {
    this.player.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.database.object('player/' + playerId);
  }


}
