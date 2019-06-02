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
  public isPrivate: boolean;

  constructor(private router: Router) {
    this.isPrivate = false;
   }

  ngOnInit() {
  }

  public onSubmit(repo: Repo) {
    if (this.isPrivate) {
      alert('Mi spiace, non sono arrivato a gestire questo caso :(');
      this.isPrivate = false;
    }
    else {
      this.router.navigateByUrl(`/${repo.username}/${repo.reponame}/commits`);
    }
  }

}
