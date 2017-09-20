import { ListAddService } from './list-add.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {Howl} from 'howler';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
