class Coder {
  // So to make a method in class you need o have a member declared as well as the constructor to make it available
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
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
  secondLang!: string; //  if you need the members but not instantiated. You can use the assertion
  // But for beginners you should avoid using this

  constructor(
    public readonly name: string, // this is when the name is assigned but cannot be changed thereafter
    public music: string,
    private age: number,
    protected lang: string = "Typescript" //  this will allow you to make it optional parameter
  ) {
    /**  like above you don't need to use the declaration here after defining the members with modifiers. But if you want you can have them in your code. */
  }

  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

const Shiva = new Code("Shivam", "Rock", 21);
// console.log(Shiva.getAge());

// console.log(Shiva.age); // this is only accessble inside of the class

// console.log(Shiva.lang); // this is only accessble inside of the class and the class that extends it

class WebDev extends Code {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Logi", 25);
console.log(Sara.getLang());

// console.log(Sara.age); // even though you have have extended a calss you cannot access it from the child calss

// console.log(Sara.lang); // same goes with the protected value directly

//////////////////////////////

// Defining an interface for a Calss

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

// when you are using an interface for a class for type definition
// the calss should have all the properties or variables of the interface
// If you change anything in class that is related with the interface it will check the type
// And will show an error if you change the type
class Guitarists implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

// Instantiate the class
const Page = new Guitarists("Jimmy", "guitar");
console.log(Page.play("strums"));

////////////////////////////////////

class Peeps {
  // this implies that the count does not apply
  // to any instantiation of the calss
  // It applies to the calss directly to itself
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  // the static type also allows us to avoid method or member declaration
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // If we leave it like this this will be an getter. To set the value we need to have a setter
  public get data(): string[] {
    return this.dataState;
  }

  public set data(state: string[]) {
    if (Array.isArray(state) && state.every((el) => typeof el === "string")) {
      this.dataState = state;
    } else throw new Error("Param is not an array of strings");
  }
}

const Rockerz = new Bands();
Rockerz.data = ["Neil Young", "Led Zep"];
console.log(Rockerz.data);

// setter
Rockerz.data = [...Rockerz.data, "ZZ Top"];
console.log(Rockerz.data);

Rockerz.data = ["Van Halen"];
