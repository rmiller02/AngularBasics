export class PersonService {
    someRandomPerson: Person = new Person("Mike", "Jones");
    constructor() { }
    getPerson(): Observable<Person> {
      return new Observable(subscriber => {
        this.delay(3000).then(() => {
          subscriber.next(this.someRandomPerson)
        })
      })
    }
    async delay(ms: number) {
      await new Promise(resolve => setTimeout(() => resolve(), ms))
    }
  }