"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.lang = lang;
        this.age = age;
    }
}
// above code example, is a one way to declare members of a class in TS.
// But it comes with a lot of boilerplate code along with type safety ofc
// Now there is another way i.e. or a way to avoid this
// By using Data modifiers or Visiblity modifiers or Access modifiers. You can name it whatever you want
class Code {
    // But for beginners you should avoid using this
    constructor(name, // this is when the name is assigned but cannot be changed thereafter
    music, age, lang = "Typescript" //  this will allow you to make it optional parameter
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        /**  like above you don't need to use the declaration here after defining the members with modifiers. But if you want you can have them in your code. */
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Shiva = new Code("Shivam", "Rock", 21);
// console.log(Shiva.getAge());
// console.log(Shiva.age); // this is only accessble inside of the class
// console.log(Shiva.lang); // this is only accessble inside of the class and the class that extends it
class WebDev extends Code {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Logi", 25);
console.log(Sara.getLang());
// when you are using an interface for a class for type definition
// the calss should have all the properties or variables of the interface
// If you change anything in class that is related with the interface it will check the type
// And will show an error if you change the type
class Guitarists {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
// Instantiate the class
const Page = new Guitarists("Jimmy", "guitar");
console.log(Page.play("strums"));
////////////////////////////////////
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
// this implies that the count does not apply
// to any instantiation of the calss
// It applies to the calss directly to itself
Peeps.count = 0;
// The final thing with the static member is that it will apply direclty to the class
// And not to any specific object that you instantiate with the calss
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Sofiya = new Peeps("Sofiya");
console.log(Steve.id);
console.log(Sofiya.id);
console.log(John.id);
console.log(Peeps.count);
////////////////////////////////////////
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    // If we leave it like this this will be an getter. To set the value we need to have a setter
    get data() {
        return this.dataState;
    }
    set data(state) {
        if (Array.isArray(state) && state.every((el) => typeof el === "string")) {
            this.dataState = state;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const Rockerz = new Bands();
Rockerz.data = ["Neil Young", "Led Zep"];
console.log(Rockerz.data);
// setter
Rockerz.data = [...Rockerz.data, "ZZ Top"];
console.log(Rockerz.data);
Rockerz.data = ["Van Halen"];
