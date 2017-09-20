import { Component } from '@angular/core';
import { ListAddService } from './list-add.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private musicService: ListAddService) {}
}
