(() => {
  let avenger: any = 123;
  avenger = "Ironman"
  console.log((avenger as string).charAt(0))
  avenger = 1.555
  console.log((<number>avenger).toFixed(2));
  
})()