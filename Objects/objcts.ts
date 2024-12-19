(() => {
  type id = {
    name: string;
    age?: number;
    power: string[];
    getName?: () => void;
  };

  let flash: id = {
    name: "Barrie Halen",
    age: 24,
    power: ["Velocidad"],
  };

  let superman: id = {
    name: "Clark Kent",
    age: 24,
    power: ["Todos"],
  };

  console.log(superman);
  
})();
