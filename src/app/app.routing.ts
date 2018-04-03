import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MerchantComponent } from './merchant/merchant.component';
import { GameComponent } from './game/game.component';
import { GoodDoorComponent } from './good-door/good-door.component';
import { BadDoorComponent } from './bad-door/bad-door.component';
import { GoblinGoodComponent } from './goblin-good/goblin-good.component';
import { GoblinBadComponent } from './goblin-bad/goblin-bad.component';
import { TreeGoodComponent } from './tree-good/tree-good.component';
import { TreeBadComponent } from './tree-bad/tree-bad.component';
import { GoblinLoveComponent } from './goblin-love/goblin-love.component';
import { GoblinHateComponent } from './goblin-hate/goblin-hate.component';
import { BrushComponent } from './brush/brush.component';
import { WashClothComponent } from './wash-cloth/wash-cloth.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'merchant',
    component: MerchantComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'good-door',
    component: GoodDoorComponent
  },
  {
    path: 'bad-door',
    component: BadDoorComponent
  },
  {
    path: 'goblin-good',
    component: GoblinGoodComponent
  },
  {
    path: 'goblin-bad',
    component: GoblinBadComponent
  },
  {
    path: 'tree-good',
    component: TreeGoodComponent
  },
  {
    path: 'tree-bad',
    component: TreeBadComponent
  },
  {
    path: 'goblin-love',
    component: GoblinLoveComponent
  },
  {
    path: 'goblin-hate',
    component: GoblinHateComponent
  },
  {
    path: 'brush',
    component: BrushComponent
  },
  {
    path: 'wash-cloth',
    component: WashClothComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
