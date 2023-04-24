import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor (private http: HttpClient) { }

  getWord(num: number): any {
    return this.http.get(`https://random-word-api.herokuapp.com/word?number=${num}`);
  }
}
