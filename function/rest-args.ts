(() => {
  const name = (firstNmae:string, ...restArgs:string[]) => {
    return `${firstNmae} ${restArgs.join(" ")}`
  }

  const superman = name("Clark", "Joseph", "Kent");
  console.log(superman)
})()