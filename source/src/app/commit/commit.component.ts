import { Component, OnInit } from '@angular/core';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {

  commits: any;
  commitsLength: number = 0;
  limit: number = 25;
  commitsArray: any = [];

  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.getCommitsList();
  }

  getCommitsList() {
    this.gitService.getCommitsList().then(response => {
      if (response.commits) {
        this.commits = response.commits;
        this.commitsLength = this.commits.length;
        if (this.commitsLength > 0) {
          for (let i = 0; i < this.limit; i ++) {
            this.commitsArray.push(this.commits[i]);
          }
          console.log(this.commitsArray);
        }
      }
    });
  }

}
