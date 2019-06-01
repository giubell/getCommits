import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commit-details',
  templateUrl: './commit-details.component.html',
  styleUrls: ['./commit-details.component.scss']
})
export class CommitDetailsComponent implements OnInit {

  @Input() public commit:string;

  constructor() { }

  ngOnInit() {
    console.log('Commit: ', this.commit)
  }

}
