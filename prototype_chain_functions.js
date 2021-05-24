// write a constructor function which only has properties

function Person(first , last , age ,gender, interests){

       this.name=first+" "+last;
        this.age=age;
        this.gender= gender;
        this.interests= interests;
}

//Now methods are all defind in constructor's prototype

Person.prototype.greeting = function(){
    console.log("Hello" +" " +this.name);
}

let p = new Person("alex","beta",23,"male","fucking around");
//p.greeting();

function Teacher(first,last,age,gender,interests,subject){

    //allows to call a function defined somewhere else but with current context
    Person.call(this,first,last,age,gender,interests);

    this.subject=subject;
}

Teacher.prototype= Object.create(Person.prototype);

Teacher.prototype.constructor= Teacher;

console.log(Teacher.prototype); // Person { constructor: [Function: Teacher] }

