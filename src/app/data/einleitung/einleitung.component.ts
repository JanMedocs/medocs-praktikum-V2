import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-einleitung',
  templateUrl: './einleitung.component.html',
  styleUrls: ['./einleitung.component.css'],
})
export class EinleitungComponent implements OnInit {
  name = environment.name;

  constructor() {}

  ngOnInit() {}
}
