import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.scss']
})
export class RandomWordComponent implements OnInit {

  @Input() words: Observable<string[]> | undefined;
  @Input() changeWord:Function = () => {};

  fetchedWords: string[] = [];
  constructor () {}

  ngOnInit(): void {
    this.words?.subscribe({
      next: (data: string[]) => {
        this.fetchedWords = data;
      }
    });
  }

}
