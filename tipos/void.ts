(() => {
  function first(): void {
    return;
  }

  function second(): void {}

  let a = first();
  let b = second();
  console.log(a);
  console.log(b);
})();
