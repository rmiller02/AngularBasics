class Person{
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private state: string;
    private zipCode: number;
    private occupation: string;
    private hourlyWage: number;

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: number, occupation: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
    }

    getFirstName(): string{
        return this.firstName;
    }

    setFirstName(firstName: string): void{
        this.firstName = firstName;
    }

    getLocation(): string{
        return this.state;
    }

    setLocation(state: string): void{
        this.state = state;
    }

    getAge(): number{
        return this.age;
    }

    setAge(age: number): void{
        this.age = age;
    }

}