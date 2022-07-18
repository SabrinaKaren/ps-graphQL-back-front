import { AuthGuardPCService } from './shared/services/auth-guard-pc.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCandidatesComponent } from './pages/candidates/page-candidates.component';
import { PageUnauthorizedComponent } from './pages/unauthorized/page-unauthorized.component';
import { PageEvaluationsComponent } from './pages/evaluations/page-evaluations.component';
import { AuthGuardAvalService } from './shared/services/auth-guard-aval.service';

const routes: Routes = [
  { path: '', redirectTo: 'candidatos', pathMatch: 'full' },
  { path: 'candidatos', component: PageCandidatesComponent, canActivate: [AuthGuardPCService] },
  { path: 'avaliacoes', component: PageEvaluationsComponent, canActivate: [AuthGuardAvalService] },
  { path: 'unauthorized', component: PageUnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
