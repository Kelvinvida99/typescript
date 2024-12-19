"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`;
        }
        else {
            return `Falta el lastname`;
        }
    };
    const name = fullName("kelvin");
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map