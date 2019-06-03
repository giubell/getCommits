import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/backendApi/models/repo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/backendApi/services/github.service';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.scss'],
})
export class CommitsPageComponent implements OnInit {


  public repo: Repo;
  public commitsList: [];
  public sha: string;
  public commit: {};

  constructor(private route: ActivatedRoute, private githubService: GithubService, private router: Router) {
    this.repo = {};
   }

  ngOnInit() {
    this.repo.username = this.route.snapshot.paramMap.get('username');
    this.repo.reponame = this.route.snapshot.paramMap.get('reponame');

    if (this.repo != null) {
      this.githubService.getCommits(this.repo).subscribe((res) =>{
        this.commitsList = res;
        console.log('this.commitsList', this.commitsList);
      },
      (err) => {
        console.log('err', err);
        if(err.status === 404) {
          alert('Repository non trovata');
          this.router.navigate(['/']);
        }
      });
    }
  }

  public shaChanged(sha: string) {
    console.log(sha);
    this.sha = sha;
    this.githubService.getCommit(this.repo, this.sha).subscribe((res) => {
      this.commit = res;
    });
  }

}
