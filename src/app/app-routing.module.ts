import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppareilViewComponent} from "./appareil-view/appareil-view.component";
import {AuthComponent} from "./auth/auth.component";
import {SingleAppareilComponent} from "./single-appareil/single-appareil.component";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";
import {AuthGuardService} from "./Services/auth-guard.service";
import {EditAppareilComponent} from "./edit-appareil/edit-appareil.component";
import {UserListComponent} from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareils/:id',canActivate: [AuthGuardService],component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
