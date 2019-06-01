import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repo } from 'src/app/backendApi/models/repo.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public repo: Object;

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  public onSubmit(repo: Repo) {
    this.router.navigateByUrl(`/${repo.username}/${repo.reponame}/commits`)
  }

}
