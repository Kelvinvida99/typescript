(() => {
  type id = {
    name: string;
    age?: number;
    power: string[];
    getName?: () => void;
  };

  let myCustomVariable: string | number | id = "Fernado";
  console.log(myCustomVariable);

  myCustomVariable = 25;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: "kelvin",
    age: 25,
    power: ["nada"],
  };
  console.log(myCustomVariable);
})();
