"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const sayHello = (name) => `Hello ${name}`;
    const liveSave = () => "Estamos salvados";
    let myFunction;
    //myFunction = 10;
    //console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    //myFunction = sayHello;
    //console.log(myFunction("kelvin"));
    //myFunction = liveSave;
    //console.log(liveSave());
})();
