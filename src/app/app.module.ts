import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodDoorComponent } from './good-door/good-door.component';
import { BadDoorComponent } from './bad-door/bad-door.component';
import { UserInputComponent } from './user-input/user-input.component';
import { MerchantComponent } from './merchant/merchant.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GoodDoorComponent,
    BadDoorComponent,
    UserInputComponent,
    MerchantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
