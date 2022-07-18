import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { PageCandidatesComponent } from './pages/candidates/page-candidates.component';
import { PageEvaluationsComponent } from './pages/evaluations/page-evaluations.component';
import { PageUnauthorizedComponent } from './pages/unauthorized/page-unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCandidatesComponent,
    PageEvaluationsComponent,
    PageUnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
