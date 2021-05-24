function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invosssssked 2nd time');
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate();
//console.log(gen);

// let result = gen.next();
// result=gen.next();
// result=gen.next();
// console.log(result);

// for (const g of gen) {
//     console.log(g);
// }

//never ending sequence

function* forever(){

    let i=0;

    while(true){
        yield i++;
    }
}

let gen2 = forever();

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    * [Symbol.iterator]() {
        for( let index = this.start; index <= this.end; index += this.interval ) {
            yield index;
        }
    }
}

let oddNumbers = new Sequence(1, 10, 2);

for (const num of oddNumbers) {
    console.log(num);
}