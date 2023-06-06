import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aufgabe2',
  templateUrl: './aufgabe2.component.html',
  styleUrls: ['./aufgabe2.component.css'],
})
export class Aufgabe2Component implements OnInit {
  resultA: number[] = [];
  resultB: number[] = [];
  resultC: number[] = [];
  resultD = '';

  constructor() {}

  ngOnInit() {}

  exerciseA() {
    /*
    Jetzt geht um Schleifen. Die For-Schleife besteht in der Klammer aus 3 Teilen.
    ('Laufvariable mit Startwert'; 'Abbruchbedingung'; 'Iteration').
    Unten findest du 2 Variablen 'i' ist die Laufvariable sie ändert sich in
    jedem Durchgang und wird in dieser For-Schleife immer mit 1 addiert (wir Informatiker sind
    faul und schreiben einfach 'i++').
    Die Variable 'end' ist der wert bei dem abgebrochen werden soll.

    Verändere die Werte so das alle Zahlen von 1 bis 100 ausgegeben werden!
    */

    // Hier starten
    let i = 0;
    let end = 0;
    // Hier nichts mehr verändern

    let result: number[] = [];
    for (i; i < end; i++) {
      result.push(i);
    }
    this.resultA = result;
    return result;
  }

  exerciseB() {
    /*
    So, hier musst du nun selber eine For-Schleife anlegen. Dieses Mal soll allerdings die 7er-Reihe ausgegeben werden.
    Also [7,14,21,28,35,…].
    Alle Zahlen bis 700 sollen vorkommen.
    Wie oben wird der Wert mit 'result.push(i);' zum Ergebnis hinzugefügt
    (Wenn deine Laufvariable auch 'i' heißt).
    */

    let result: number[] = [];
    //Start

    //End
    this.resultB = result;
    return result;
  }

  check(test: string) {
    if (
      test === 'a' &&
      this.resultA.length === 100 &&
      this.resultA[0] === 1 &&
      this.resultA[this.resultA.length - 1] === 100
    ) {
      return true;
    }
    if (
      test === 'b' &&
      this.resultB.length === 100 &&
      this.resultB[0] === 7 &&
      this.resultB[this.resultB.length - 1] === 700
    ) {
      return true;
    }
    return false;
  }
}
