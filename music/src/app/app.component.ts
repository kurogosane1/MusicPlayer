import { Component } from '@angular/core';
import { ListAddService } from './list-add.service';
import {Howl} from 'howler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tracks: Array<any>;
  // this will track of index
  index: number;
  // this is for later
  menuOpen: boolean;
  sound: any;

  constructor() {
    this.sound = new Howl({
      src: ['../assets/1-01 Galaxy Supernova.mp3'],
      onend: function() {
          console.log('Finished!');
      },
      onloaderror: function() {
          console.log('Error!');
      },
  });
  }

    // playing of music
    playMusic() {
      this.sound.play();
    }

    // to pause music
    pauseMusic() {
      this.sound.pause();
    }

    // next music
    nextMusic() {}
}
