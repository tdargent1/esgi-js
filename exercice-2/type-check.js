function type_check_v1(val, type) {
    switch (typeof val) {
        case "object":
            if (type === "array") {
                return Array.isArray(val);
            }
            if (type === "null") {
                return val === null;
            }

            return val != null && ! Array.isArray(val);
        default:
            return typeof val === type;
    }
}

function type_check_v2(arg1, conf) {
    if(conf["type"] !== undefined) {
        if(typeof arg1 !== conf["type"]) {
            return false;
        } 
    }
    if(conf["value"] !== undefined) {
        if(arg1 !== conf["value"]) {
            return false;
        }
    }
    if(conf["enum"] !== undefined) {
        if(!(arg1 in conf["enum"])) {
            return false;
        } 
    }

    return true;
}

/* Vérification pour la fonction type_check_v1 */
console.log(type_check_v1(1, "number"));
console.log(type_check_v1(1, "string"));
console.log(type_check_v1("2", "string"));
console.log(type_check_v1([1, 2], "array"));

/* Vérification pour la fonction type_check_v2 */
console.log(type_check_v2({prop1 : 1}, {type :  "object"}));
console.log(type_check_v2("foo", {type : "string", value : "foo"}));
console.log(type_check_v2("bar", {type : "string", value : "foo"}));
console.log(type_check_v2(3, {enum : ["foo", "bar", 3]}));