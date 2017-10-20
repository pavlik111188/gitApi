import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitService {

  private domain = 'https://api.github.com/';
  private commitsListUrl = 'repos/angular/angular/commits';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getCommitsList(): Promise<any> {
    const url = `${this.domain}${this.commitsListUrl}`;
    return this.http.get(url)
        .toPromise()
        .then(
            (response: Response) => {
              let commits = response.json();
              if (commits) {
                return {status: 'Success', commits: commits};
              }
            },
            error => {
              return {
                status: 'Error',
                error: JSON.parse(Object(error)._body).message
              }
            }
        )
        .catch(this.handleError);
  }

}
