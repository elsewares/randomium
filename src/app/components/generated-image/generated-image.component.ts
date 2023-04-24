import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MidjourneyService} from "../../services/midjourney.service";
import {Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-generated-image',
  templateUrl: './generated-image.component.html',
  styleUrls: ['./generated-image.component.scss']
})
export class GeneratedImageComponent implements OnInit {

  @Input() words: Observable<string[]> | undefined;

  fetchedWords: string[] = [];
  imgSrc: string = '';
  startAnimation: boolean = false;
  constructor (private midjourney:MidjourneyService) {
  }

  ngOnInit(): void {
    this.words?.subscribe({
      next: (data: string[]) => {
        console.log('DATA in generatedImage is ---> ', data)
        this.fetchedWords = data;
        if (this.fetchedWords.length > 0) {
          this.midjourney.getImage(this.fetchedWords.join(' ')).subscribe({
            next: (res: any) => {
              this.imgSrc = 'data:image/png;base64,' + res.data[0].b64_json;
            },
            error: (error: string) => {
              this.imgSrc = 'assets/oops.png';
            },
            complete: () => {
              this.startAnimation = true;
            }
          })
        }
      }
    });
  }

  makeSearchTerm (): string {
    return this.fetchedWords ? this.fetchedWords.join(' ') : '';
  }



}
