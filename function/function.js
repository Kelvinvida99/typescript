"use strict";
(() => {
    const hello = 'hello';
    function sayHello() {
        return hello;
    }
    const getHello = sayHello();
    console.log(getHello);
})();
