import {Component, OnInit} from '@angular/core';
import {WordService} from "../services/word.service";
import {debounce, debounceTime, Observable, of, pluck, take, tap} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  words: Observable<string[]> | undefined;

  constructor (private wordSvc: WordService) {

  }
  ngOnInit(): void {
    this.fetchWord();
  }

  fetchWord () {
    console.log('Firing off request...');
    this.words = this.wordSvc.getWord(2).pipe(
      tap({
        next: (data: string[]) => {
          return of(data);
        },
        error: (error: string) => {
          console.log(error);
        },
        complete: () => {
          console.log('Complete');
        }
      })
    );
  }

  changeWord (index: number): void {
    // this.wordSvc.getWord(1).pipe(
    //   tap({
    //     next: (data: string[]) => {
    //       console.log(data);
    //       // const currWords = this.words.pipe();
    //       // currWords[index] = data[0];
    //       // this.words = of(currWords);
    //     }
    //   }
    // ))
  }
}


