import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aufgabe3',
  templateUrl: './aufgabe3.component.html',
  styleUrls: ['./aufgabe3.component.css'],
})
export class Aufgabe3Component implements OnInit {
  value = '';
  isPrimeResult = false;

  constructor() {}

  ngOnInit() {}

  /*
  Soll true zurückliefern wenn die Eingabe eine Primzahl ist (return true), ansonsten false (return false)
  */
  isPrime() {
    const number = Number(this.value);
  }

  /*
  Soll true zurückliefern wenn die Eingabe eine gerade Zahl ist (return true), ansonsten false (return false)
  */
  isEven() {
    const number = Number(this.value);
  }
  /*  
  Soll true zurückliefern wenn die Eingabe eine ungerade Zahl ist (return true), ansonsten false (return false)
  */
  isOdd() {
    const number = Number(this.value);
  }
  /*  
  Soll die vorherige Zahl Zurückliefern (retun result)
  */
  prev() {
    const number = Number(this.value);
  }
  /*  
  Soll die nachfolgende Zahl Zurückliefern (retun result)
  */
  after() {
    const number = Number(this.value);
  }
  /*  
  Soll die nachfolgende gerade Zahl Zurückliefern (retun result)
  */
  nextEven() {
    const number = Number(this.value);
  }
}
