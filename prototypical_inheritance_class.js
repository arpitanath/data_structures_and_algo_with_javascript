
//class

class Person{

    constructor(first,last,age,gender,interests){
        this.name=first+" "+last;
        this.age=age;
        this.gender=gender;
        this.interests=interests;
    }

    greeting(){
        console.log(`Hi ${this.name}`);
    }
}

let p= new Person("arpita","nath",23,"female","funck aroung");

p.greeting();