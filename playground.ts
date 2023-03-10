// // // interface Person {
// // //   name: string;
// // //   age: number;
// // // }

// // class Person {
// //   name: string;
// //   age?: number;

// //   constructor(name: string, age: number) {
// //     (this.name = name), (this.age = age);
// //   }
// // }

// // // interface PersonLoggerFn {
// // //   (name: string, age: number): string;
// // // }

// // type PersonLoggerFn = (name: string, age?: number) => string;

// // export default function play() {
// //   const name = "Tolgi";
// //   const age = 31;
// //   const person: Person = {
// //     name: "Dicle",
// //     age: 30,
// //   };

// //   //   function logPersonInfo(personName: string, personAge: number): string {
// //   //     // const info = "Name: " + personName + ", age: " + personAge;
// //   //     const info = `Name: ${personName}, age: ${personAge}`;
// //   //     console.log(info);
// //   //     return info;
// //   //     }

// //   const logPersonInfo: PersonLoggerFn = (
// //     personName: string,
// //     personAge: number = 0
// //   ): string => {
// //     const info = `Name: ${personName}, age: ${personAge}`;
// //     console.log(info);
// //     return info;
// //   };

// //   function logPersonInfo2(person: { name: string; age: number }) {
// //     // const info = "Name: " + personName + ", age: " + personAge;
// //     const info = `Name: ${person.name}, age: ${person.age}`;
// //     console.log(info);
// //     return info;
// //   }
// //   function logPersonInfo3(person: Person) {
// //     // const info = "Name: " + personName + ", age: " + personAge;
// //     const info = `Name: ${person.name}, age: ${person.age}`;
// //     console.log(info);
// //     return info;
// //   }

// //   logPersonInfo(name, age);
// //   logPersonInfo2(new Person("Tolgis", 50));
// // }

// // export default function play() {
// //   const random = Math.random() > 0.5 ? "hello" : "[1,2]";

// //   const numbers: Array<number> = [1, 2, 3, 4, 5];

// //   const names: string[] = ["Ayşe", "Fatma", "Hayriye"];

// //   //   const upper = random.toUpperCase();
// //   if (typeof random === "string") {
// //     const upper = random.toUpperCase();
// //     console.log(upper);
// //   } else {
// //     console.log(random);
// //   }
// // }

// // interface Person {
// //   name: string;
// //   age: number;
// // }

// // interface BusinessPerson extends Person {
// //   salary: number;
// // }

// // interface AcademicPerson extends Person {
// //   publications: string[];
// // }

// // export default function play() {
// //   const person: AcademicPerson = {
// //     name: "Tolga",
// //     age: 32,
// //     publications: ["1", "2", "3"],
// //   };
// //   const person2: BusinessPerson = {
// //     name: "Tolga",
// //     age: 32,
// //     salary: 31000,
// //   };
// //   function logPerson(person: Person) {}
// //   logPerson(person2);
// // }

// // type RaceCar = {
// //   name: string;
// //   maxSpeed: 200;
// //   team: string;
// // };

// // type CityCar = {
// //   name: string;
// //   space: number;
// //   maxSpeed: 100;
// // };

// // type Car = RaceCar | CityCar;

// // export default function play() {
// //   //   function logCarInfo(car: RaceCar | CityCar) {
// //   //     console.log(car.maxSpeed);
// //   //   }
// //   //   const car: RaceCar = {
// //   //     name: "Aston Martin",
// //   //     maxSpeed: 200,
// //   //     team: "Ferrari",
// //   //   };
// //   const car: CityCar = {
// //     name: "Aston Martin",
// //     space: 300,
// //     maxSpeed: 100,
// //   };

// //   function logCarInfo(car: Car) {
// //     console.log(car.name, car.maxSpeed, (car as RaceCar).team);
// //     console.log(car.name, car.maxSpeed, (<CityCar>car).space);
// //     switch (car.maxSpeed) {
// //       case 200:
// //         console.log(car.team);
// //         break;
// //       case 100:
// //         console.log(car.space);
// //         break;
// //       default:
// //         console.log(car);
// //     }
// //   }
// //   logCarInfo(car);
// // }

// // interface Person {
// //   kind: "business" | "academic";
// //   name: string;
// //   age: number;
// // }

// // interface BusinessPerson extends Person {
// //   kind: "business";
// //   salary: number;
// //   company: number;
// // }

// // interface AcademicPerson extends Person {
// //   kind: "academic";
// //   article: number;
// //   school: string;
// // }

// // type Human = BusinessPerson | AcademicPerson;

// // type CityCar = {
// //   brand: string;
// //   year: number;
// //   maxSpeed: 100;
// //   name: string;
// // };
// // type RaceCar = {
// //   brand: string;
// //   year: number;
// //   maxSpeed: 200;
// //   team: string;
// // };
// // type SUVcar = {
// //   name: string;
// //   isCarbonFree: boolean;
// //   maxSpeed: 150;
// // };

// // type Car = RaceCar | CityCar | SUVcar;

// // export default function play() {
// //   const car: CityCar = {
// //     name: "Aston Martin",
// //     brand: "Opel",
// //     maxSpeed: 100,
// //     year: 2015,
// //   };

// //   function logPersonInfo(human: Human) {
// //     if (human.kind === "academic") {
// //       console.log(human);
// //     } else if (human.kind === "business") {
// //       console.log(human);
// //     } else {
// //       console.log(human);
// //     }
// //   }
// //   function logCarInfo(car: Car) {
// //     switch (car.maxSpeed) {
// //       case 200:
// //         console.log(car.maxSpeed);
// //         break;
// //       case 100:
// //         console.log(car.name);
// //         break;
// //       case 150:
// //         console.log(car.isCarbonFree);
// //         break;
// //       default:
// //         const _never: never = car;
// //         return _never;
// //     }
// //   }
// //   logCarInfo(car);

// //   function printInfo(someObject: { [key: string]: unknown }) {
// //     if (typeof someObject.age === "string") {
// //       someObject.age.toUpperCase();
// //     }
// //   }
// //   printInfo({
// //     age: "21",
// //     isMarried: true,
// //   });
// // }

// interface Person {
//   age: number;
//   name: string;
//   kind: "business" | "academic" | "othertype";
// }

// interface BusinessPerson extends Person {
//   salary: number;
//   company: string;
//   kind: "business";
// }

// interface AcademicPerson extends Person {
//   article: number;
//   university: string;
//   kind: "academic";
// }

// interface Person {
//   prop1: string;
//   prop2: number;
// }

// // type Noop = () => any;
// // type Noop2 = () => void;

// class Logger<T> {
//   log(items: Array<T>, callback: (i: T) => void) {
//     items.forEach((item) => {
//       callback(item);
//     });
//   }
// }
// // class Logger {
// //   log(items: Array<string>, callback: any) {
// //     items.forEach((item) => {
// //       callback(item);
// //     });
// //   }
// // }

// export default function play() {
//   //   function fn1(x: Noop): void {
//   //     const result = x();
//   //     result();
//   //   }
//   //   function fn2(x: Noop2): void {
//   //     const result = x();
//   //     result();
//   //   }

//   //   function iterate(items: Array<string>) {
//   //     items.forEach((item) => {
//   //       console.log(item.toUpperCase());
//   //     });
//   //   }
//   //   iterate(["Ayşe", "Fatma", "Hayriye"]);

//   const logger = new Logger();
//   const cars = ["audi", "skoda", "opel", "volkswagen"];
//   logger.log(cars, (car) => {
//     console.log(car);
//   });
//     const persons = []
//   //   const logger = new Logger();
//   //   const cars = ["audi", "skoda", "opel", "volkswagen"];
//   //   logger.log(cars, (car: any) => {
//   //     console.log(car);
//   //   });
// }

//generic extends

// interface Person {
//   name: string;
//   age: number;
//   city: string;
// }

// class Student implements Person {
//   name = "";
//   age = 0;
//   city = "";
// }

// interface BusinessPerson {
//   name: string;
//   age: number;
//   city: string;
//   salary: number;
// }

// class Logger<T extends Person> {
//   log(items: Array<T>, callback: (i: T) => void) {
//     items.forEach((item) => {
//       callback(item);
//     });
//   }
// }

// class extends defauly value

// class Logger<T extends Person = Person> {
//   log(items: Array<T>, callback: (i: T) => void) {
//     items.forEach((item) => {
//       callback(item);
//     });
//   }
// }

// export default function play() {
//   const logger = new Logger<BusinessPerson>();
//   const persons = [
//     { name: "Tolga", age: 31, city: "İstanbul", salary: 11000 },
//     { name: "Sırma", age: 30, city: "İstanbul", salary: 110000 },
//   ];
//   logger.log(persons, (person) => {
//     console.log(person);
//   });
// }

// interface Person {
//   name: string;
// }

// interface Student extends Person {
//   age: number;
// }

// interface PostGraduateStudent extends Student {
//   projects: string[];
// }

// type StudentInfo<T extends Student = Student> = {
//   data: T;
//   grades: number[];
// };

// export default function play() {
//   const info = {
//     data: {
//       name: "Tolgi",
//       age: 21,
//     },
//     grades: [1, 2, 3, 4],
//     projects: ["abc", "def", "ghi"],
//   };
//   function log(info: StudentInfo<PostGraduateStudent>) {
//     console.log(info.data.name);
//     console.log(info.data.age);
//     console.log(info.data.projects);
//   }
//   log(info);
// }
