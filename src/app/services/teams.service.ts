import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map , concatMap} from 'rxjs/operators';
import { Team } from '../models/team';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/teams';

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }
}
