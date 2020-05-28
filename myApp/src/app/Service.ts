import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private Person: Person[] = [
    new Person("Kevin", true), 
    new Person("Mr. jones", false),
    new Person("Mike", true)
  ];
  constructor() { }

  getPerson(): Person[] {
    return this.Person;
  }
  ngOnInit(): void {
}

}
