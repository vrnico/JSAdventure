import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MerchantComponent } from './merchant/merchant.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'merchant',
    component: MerchantComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
