import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MidjourneyService} from "../../services/midjourney.service";

@Component({
  selector: 'app-generated-image',
  templateUrl: './generated-image.component.html',
  styleUrls: ['./generated-image.component.scss']
})
export class GeneratedImageComponent implements OnChanges {

  @Input() searchTerm: string = '';

  imgSrc: string = '';
  startAnimation: boolean = false;
  constructor (private midjourney:MidjourneyService) {

  }

  ngOnChanges(changes:SimpleChanges): void {
    if (typeof changes['searchTerm'].currentValue === 'string') {
      this.midjourney.getImage(changes['searchTerm'].currentValue).subscribe({
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



}
