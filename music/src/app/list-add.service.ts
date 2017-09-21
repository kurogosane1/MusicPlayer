import { Injectable } from '@angular/core';
import {Howl} from 'howler';

@Injectable()
export class ListAddService {

  constructor() { }

  // to play music
  playsound() {
    const sound: any = new Howl({
      src: ['../assets/1-01 Galaxy Supernova.mp3']
    });
  }

  // to pause music
  stopMusic() {
    
  }

  // next music
  nextMusic() {}

  // go back music button

  backMusic() {}

  // to add music
  addMusic() {}
}
