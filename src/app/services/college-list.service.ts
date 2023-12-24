import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class CollegeListService {
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  public getCollegeList() {
    return this.http.get(
      'http://universities.hipolabs.com/search?country=india'
    );
  }
}
