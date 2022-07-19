import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-candidates',
  templateUrl: './page-candidates.component.html',
  styleUrls: ['./page-candidates.component.scss']
})
export class PageCandidatesComponent implements OnInit {

  data?: any[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates(): void {
    this.http.get('http://localhost:9000/api/candidate').subscribe({
      next: (response: any) => {
        this.data = response;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}