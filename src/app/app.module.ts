import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomWordComponent } from './components/random-word/random-word.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { MainComponent } from './main/main.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {WordService} from "./services/word.service";
import {MidjourneyService} from "./services/midjourney.service";
import {HttpClientModule} from "@angular/common/http";
import { GeneratedImageComponent } from './components/generated-image/generated-image.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomWordComponent,
    MainComponent,
    GeneratedImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [WordService, MidjourneyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
