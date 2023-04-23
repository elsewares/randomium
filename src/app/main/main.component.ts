import { Component } from '@angular/core';
import {WordService} from "../services/word.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  word: string = '';

  constructor (private wordSvc: WordService) {}
  ngOnInit(): void {
    this.fetchWord();
  }

  fetchWord () {
    this.word = this.wordSvc.getWord().subscribe({
      next: (data: string[]) => {
        this.word = data.join(' ');
      },
      error: (error: string) => {
        console.log('ERROR IS ----', error);
      },
      complete: () => {
        console.log('COMPLETE');
      }
    });
  }
}
