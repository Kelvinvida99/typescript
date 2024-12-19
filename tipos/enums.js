"use strict";
(() => {
    let VolumnValue;
    (function (VolumnValue) {
        VolumnValue[VolumnValue["min"] = 10] = "min";
        VolumnValue[VolumnValue["midium"] = 11] = "midium";
        VolumnValue[VolumnValue["max"] = 100] = "max";
    })(VolumnValue || (VolumnValue = {}));
    let checkVolumn = VolumnValue[10];
    console.log(checkVolumn);
    console.log(VolumnValue);
})();
//# sourceMappingURL=enums.js.map