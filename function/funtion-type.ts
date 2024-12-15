(() => {
  const addNumber = (a: number, b: number):number => a + b;
  const sayHello = (name: string):string => `Hello ${name}`;
  const liveSave = ():string => "Estamos salvados";

  let myFunction: (a:number, b:number) => number;

  //myFunction = 10;
  //console.log(myFunction);

  myFunction = addNumber;
  console.log(myFunction(1, 2));

  //myFunction = sayHello;
  //console.log(myFunction("kelvin"));

  //myFunction = liveSave;
  //console.log(liveSave());
})();
