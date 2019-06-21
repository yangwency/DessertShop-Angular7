import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SuccessorderComponent} from './successorder/successorder.component'
import { RegistrationComponent } from './registration/registration.component';
import {GameComponent} from './game/game.component'
import { AuthGuard } from './_guards';

const routes: Routes = [  
{ path: '', component: HomeComponent ,canActivate: [AuthGuard]},
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'success', component: SuccessorderComponent },
{ path: 'game', component: GameComponent },
 // otherwise redirect to home
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

