import {Component, OnInit} from '@angular/core';
import {WordService} from "../services/word.service";
import {Observable, of, shareReplay, tap} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  words: Observable<string[]> | undefined;
  fetched: boolean = false;
  constructor (private wordSvc: WordService) {

  }
  ngOnInit(): void {
    this.fetchWord();
  }

  fetchWord () {
    this.words = this.wordSvc.getWord(2).pipe(
      shareReplay(1),
      tap({
        next: (data: string[]) => {
          console.log('Getting data...', data);
          return of(data);
        },
        error: (error: string) => {
          console.log(error);
        },
        complete: () => {
          this.fetched = true;
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


