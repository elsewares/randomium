import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor (private http: HttpClient) { }

  getWord(): any {
    return this.http.get('https://random-word-api.herokuapp.com/word?number=2');
  }
}
