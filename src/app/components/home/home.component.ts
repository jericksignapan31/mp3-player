import { Component } from '@angular/core';
import { IPlayList } from 'src/app/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  controls: IPlayList[] = [
    {
      number: '01',
      singer: 'mushup',
      title: 'Muli x I need you',
      range: '2:43',
    },
    {
      number: '01',
      singer: 'mushup',
      title: 'Muli x I need you',
      range: '2:43',
    },
  ];
}
