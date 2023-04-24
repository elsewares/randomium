import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MidjourneyService {

  private readonly key = process.env['OPEN_AI_API_KEY'];

  constructor (private http:HttpClient) { }

  getImage (searchTerm: string): any {
    console.log(`Create a hyperrealistic portrait photograph of a beautiful person embodying the concept "${searchTerm}"`);

    return this.http.post('https://api.openai.com/v1/images/generations', {
      'prompt': `Create a hyperrealistic portrait photograph of a strikingly beautiful person embodying the concept "${searchTerm}"`,
      'n': 1,
      'size': '512x512',
      'response_format': 'b64_json'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.key}`,
        'Organization': 'org-6E3Ul8Wfj3eg1yPG4aC3aD6A'
      }
    })
  }
}
