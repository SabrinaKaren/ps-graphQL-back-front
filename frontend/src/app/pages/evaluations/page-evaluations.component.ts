import { MapModel } from './../../shared/models/MapModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-evaluations',
  templateUrl: './page-evaluations.component.html',
  styleUrls: ['./page-evaluations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageEvaluationsComponent implements OnInit {

  candidatesList?: MapModel[];
  statusList?: MapModel[];

  form: FormGroup = new FormGroup({
    selectedCandidate: new FormControl('', [Validators.required]),
    selectedStatus: new FormControl('', [Validators.required])
  });
  saved: boolean = false;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form.disable();
  }

  ngOnInit(): void {
    if (environment.apiType == 'rest') {
      this.getCandidatesRest();
      this.getStatusRest();
    } else if (environment.apiType == 'graphql') this.getCandidatesAndStatusGraphql();
  }

  ngOnDestroy(): void {
    this._snackBar.dismiss();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //******************************************************
  //           Consultando e montando os selects
  //******************************************************

  getCandidatesRest(): void {

    this.http.get('http://localhost:9000/api/candidate/simplified').subscribe({
      next: (response: any) => {
        this.candidatesList = response.map((item: any) => {
          return { key: item.id, value: item.nome }
        });
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => this.form.enable()
    });

  }

  getStatusRest(): void {

    this.http.get('http://localhost:9000/api/status/simplified').subscribe({
      next: (response: any) => {
        this.statusList = response.map((item: any) => {
          return { key: item.id, value: item.nome }
        });
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => this.form.enable()
    });

  }

  getCandidatesAndStatusGraphql(): void {}

  //******************************************************
  //             Gravar registro de avaliação
  //******************************************************

  register(): void {
    if (this.form.valid) {

      this.form.disable();

      if (environment.apiType == 'graphql') this.registerGraphql();
      else if (environment.apiType == 'rest') this.registerRest();

    } else {
      this.openSnackBar({
        message: 'O candidato e o status devem ser informados!',
        type: 'warn',
        actionText: undefined,
        duration: 5000
      });
    }
  }

  registerRest(): void {

    this.http.put(
      'http://localhost:9000/api/candidate/status',
      { candidateId: this.form.get('selectedCandidate')?.value, statusId: this.form.get('selectedStatus')?.value },
      { responseType: 'text' }
    ).subscribe({
      next: (_) => {
        this.openSnackBar({
          message: 'Avaliação registrada com sucesso!',
          type: 'success',
          actionText: 'Finalizar',
          duration: undefined
        });
        this.saved = true;
      },
      error: (err) => {
        console.error(err);
        this.openSnackBar({
          message: 'Ocorreu um erro ao tentar registrar a avaliação!',
          type: 'error',
          actionText: undefined,
          duration: 5000
        });
        this.form.enable();
      }
    });

  }

  registerGraphql(): void {}

  //******************************************************
  //                Controles do SnackBar
  //******************************************************
  
  openSnackBar(snackBar: SnackBarModel) {

    let snackBarRef = this._snackBar.open(snackBar.message, snackBar.actionText, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: snackBar.duration,
      panelClass: this.getSnackBarClassByType(snackBar.type)
    });
    
    snackBarRef.onAction().subscribe(() => {
      this.reloadComponent();
    });

  }

  getSnackBarClassByType(type: 'error' | 'warn' | 'success' | undefined): string[] | undefined {
    switch (type) {
      case 'error':
        return ['error-snackbar'];
      case 'warn':
        return ['warn-snackbar'];
      case 'success':
        return ['success-snackbar'];
      default:
        return undefined;
    }
  }

}

export interface SnackBarModel {
  message: string;
  type: 'error' | 'warn' | 'success' | undefined;
  actionText: string | undefined;
  duration: number | undefined;
}