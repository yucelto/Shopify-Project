// interface Person {
//   name: string;
// }

// //single type
// type singleType<T> = T extends any[] ? T[number] : T;
// //array index type
// type CustomArray<T> = {
//   [index: number]: T;
// };
// //custom object
// type CustomObject<T> = {
//   [key: string]: T;
// };

// export default function play2() {
//   //   type Type1 = singleType<string[]>;
//   //   type Type2 = singleType<number[]>;
//   //   type Type3 = singleType<Person[]>;
//   const items: CustomArray<string> = ["1", "2", "3"];
//   const items2: CustomArray<number> = [1, 2, 3];
//   console.log(items[0]);
//   console.log(items2[2]);
//   const person: CustomObject<string> = {
//     age: "23",
//     name: "Tolgi",
//     city: "İstanbul",
//   };
// }

//Typeof usage

// interface Person {
//   name: string;
// }

// export default function play2() {
//   function logger(...args: any[]) {
//     return "Hello World";
//   }
//   const kindaLogger: typeof logger = (name: string, age: number) => "Hi Guys";

//   const person = {
//     name: "Tolga",
//     age: 31,
//   };

//   const person2: typeof person = {
//     name: "Peyman",
//     age: 37,
//   };
//   console.log(kindaLogger(person2));
// }

//usage of infer
// interface Person {
//   name: string;
// }

// // type ReturnType<T> = T extends () => string ? string : number;
// type ReturnType<T> = T extends () => infer R ? R : number;

// export default function play2() {
//   function logger() {
//     return "Hello World";
//   }

//   const loggerReturn: ReturnType<typeof logger> = "100";
// }

//keyof parameter
// interface Person {
//   name: string;
//   age: number;
// }

// type PersonKey = keyof Person;

// export default function play2() {
//   const personKey: PersonKey = "name";
// }

//multpile generic
// interface Person {
//   name: string;
//   age: number;
//   grades: number[];
// }

// type Logger<T, E, R> = (param1: T, param2: E) => R;

// export default function play2() {
//   const superLogger: Logger<string, number, string> = (
//     name: string,
//     age: number
//   ) => {
//     return "Hello World";
//   };
// }

//infering return type of promise

export default async function play2() {
  type Greeting = { message: string };

  const getHelloProps = async function () {
    const greeting: Greeting = { message: "Hi Friends!" };
    return {
      props: {
        greeting,
        data: {
          cars: ["Masserati", "Porche"],
        },
      },
    };
  };

  //   const data = await getHelloProps();
  //   debugger;
  function sayHello() {
    console.log("Helloe World ");
  }
}
