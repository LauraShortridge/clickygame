class Person {
    constructor(name) {
        this.name = name;
        console.log('Inside person constructor')
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}

let Victor = new Person("Victor");
Victor.sayHello();



class Scientist extends Person {
    constructor(name, profession) {
        super(name);
        this.profession = profession
    }

    science() {
        console.log(`I am a ${this.profession}. Science!!`)
    }
}


let Michelle = new Scientist("Michelle");
Michelle.sayHello();
Michelle.science();