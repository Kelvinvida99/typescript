(() => {
  
  const errorMessage = (message: string):never => {
    throw new Error(message)
  }

  console.log(errorMessage("Ha ocurrido un error"));
  

})()