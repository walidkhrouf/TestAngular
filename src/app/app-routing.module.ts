import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from './features/team/form-team/form-team.component';
import { MyTeamsComponent } from './features/team/my-teams/my-teams.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'show-teams',
      loadChildren: () =>
      import('./features/team/team.module').then((m) => m.TeamModule)
  },
 { path: 'add-team', component: FormTeamComponent },
 { path: 'show-my-teams', component: MyTeamsComponent },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
