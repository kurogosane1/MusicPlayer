import { Injectable } from '@angular/core';
import {Howl} from 'howler';

// This is to create the object
interface Playlist {
  id: number;
  playing: boolean;
  sound: Howl;
}

@Injectable()
export class ListAddService {

  constructor() { }

  // to play music
  play() {}

  // to pause music
  pauseMusic() {}

  // next music
  nextMusic() {}

  // go back music button

  backMusic() {}

  // to add music
  addMusic() {}
}
