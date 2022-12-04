import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    { path: 'join', component: JoinComponent },
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: '/join', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
