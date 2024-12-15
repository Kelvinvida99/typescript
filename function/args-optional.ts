(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName}`;
    } else {
      return `Falta el lastname`
    }
  };

  const name = fullName("kelvin");
  console.log(name);
})();
