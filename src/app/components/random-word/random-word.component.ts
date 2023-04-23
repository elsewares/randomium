import {Component, Input, OnInit} from '@angular/core';
import {WordService} from "../../services/word.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.scss']
})
export class RandomWordComponent implements OnInit {

  @Input() word: string = '';

  constructor(private wordSvc:WordService) {}

  ngOnInit(): void {

  }

  displayWord (): string {
    return this.word;
  }
}
