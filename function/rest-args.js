"use strict";
(() => {
    const name = (firstNmae, ...restArgs) => {
        return `${firstNmae} ${restArgs.join(" ")}`;
    };
    const superman = name("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
//# sourceMappingURL=rest-args.js.map