import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-aufgabe1',
  templateUrl: './aufgabe1.component.html',
  styleUrls: ['./aufgabe1.component.css'],
})
export class Aufgabe1Component implements OnInit {
  name = environment.name;

  message = '';
  constructor() {}

  ngOnInit() {
    // Hallo! Hier hin!
    /*
    Unten findest du eine sogenannte Variable namens 'message'.
    Diese liefert die Informationen an die HTML Datei zum Anzeigen.
    Deklariert, also festgelegt wie Sie heißt und das es sie gibt, habe ich schon für dich gemacht.
    Das, was du noch machen musst, ist ihr den String (ein Wert vom Typ Text) 'Hello World' zu geben.
    Das sollte dann auch auf der Anzeige in Grün erscheinen.
    Probiere doch auch mal andere Texte aus.
    */
    //start
    this.message = '';
    //end
  }

  check() {
    if (this.message === 'Hello World') {
      return 'green';
    }
    return 'red';
  }
}
