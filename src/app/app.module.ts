import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodDoorComponent } from './good-door/good-door.component';
import { BadDoorComponent } from './bad-door/bad-door.component';
import { UserInputComponent } from './user-input/user-input.component';
import { MerchantComponent } from './merchant/merchant.component';
import { GameComponent } from './game/game.component';
import { GoblinGoodComponent } from './goblin-good/goblin-good.component';
import { GoblinBadComponent } from './goblin-bad/goblin-bad.component';
import { TreeGoodComponent } from './tree-good/tree-good.component';
import { TreeBadComponent } from './tree-bad/tree-bad.component';
import { GoblinLoveComponent } from './goblin-love/goblin-love.component';
import { GoblinHateComponent } from './goblin-hate/goblin-hate.component';
import { BrushComponent } from './brush/brush.component';
import { WashClothComponent } from './wash-cloth/wash-cloth.component';
import { TreeLoveComponent } from './tree-love/tree-love.component';
import { TreeHateComponent } from './tree-hate/tree-hate.component';
import { FreeWolfComponent } from './free-wolf/free-wolf.component';
import { GoblinFamComponent } from './goblin-fam/goblin-fam.component';
import { PurpleStoneComponent } from './purple-stone/purple-stone.component';
import { KillPurpleComponent } from './kill-purple/kill-purple.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GoodDoorComponent,
    BadDoorComponent,
    UserInputComponent,
    MerchantComponent,
    GameComponent,
    GoblinGoodComponent,
    GoblinBadComponent,
    TreeGoodComponent,
    TreeBadComponent,
    GoblinLoveComponent,
    GoblinHateComponent,
    BrushComponent,
    WashClothComponent,
    TreeLoveComponent,
    TreeHateComponent,
    FreeWolfComponent,
    GoblinFamComponent,
    PurpleStoneComponent,
    KillPurpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
