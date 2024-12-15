(() => {
  const hello:string = 'hello';

  function sayHello():string {
    return hello
  }

  const getHello:string = sayHello()
  console.log(getHello)
})()