import { Component } from '@angular/core';
import { ListAddService } from './list-add.service';
import {Howl} from 'howler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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

    playMusic() {
      this.sound.play();
    }

    pauseMusic() {
      this.sound.pause();
    }
}
