import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-page-candidates',
  templateUrl: './page-candidates.component.html',
  styleUrls: ['./page-candidates.component.scss']
})
export class PageCandidatesComponent implements OnInit {

  data?: any[];

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    if (environment.apiType == 'graphql') this.getAllCandidatesGraphql();
    else if (environment.apiType == 'rest') this.getAllCandidatesRest();
  }

  getAllCandidatesGraphql(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            candidatos {
              id
              nome
              cpf
              email
              dataNascimento
              cidade
              curriculo
              linkRepositorio
              status
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        if (result?.data?.candidatos) {
          this.data = result.data.candidatos;
        }
      });
  }

  getAllCandidatesRest(): void {
    this.http.get('http://localhost:9000/api/candidate/all').subscribe({
      next: (response: any) => {
        this.data = response;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}