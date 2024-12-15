"use strict";
(() => {
    const errorMessage = (message) => {
        throw new Error(message);
    };
    console.log(errorMessage("Ha ocurrido un error"));
})();
