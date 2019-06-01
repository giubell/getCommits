import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Repo } from '../models/repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getCommits(repo: Repo): Observable<any> {

    const url = `https://api.github.com/repos/${repo.username}/${repo.reponame}/commits`

    return this.http.get(url, {responseType:'json'});
  }

  getCommit(repo: Repo, sha: string): Observable<any> {
    const url = `https://api.github.com/repos/${repo.username}/${repo.reponame}/commits/${sha}`

    return this.http.get(url, {responseType:'json'});
  }

}
