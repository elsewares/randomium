import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MidjourneyService {

  constructor (private http:HttpClient) { }

  getImage (searchTerm: string): any {
    return this.http.post('https://api.openai.com/v1/images/generations', {
      'prompt': `Create a hyperrealistic portrait photograph of a beautiful person embodying the concept "${searchTerm}"`,
      'n': 1,
      'size': '512x512',
      'response_format': 'b64_json'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer *TEWKEN*',
        'Organization': 'org-6E3Ul8Wfj3eg1yPG4aC3aD6A'
      }
    })
  }
}
