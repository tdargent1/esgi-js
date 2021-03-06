function type_check_v1(value, type) {
    if(typeof value == "object") {
        switch (type) {
            case "object":
                return value !== null && ! Array.isArray(value);
            case "array":
                return Array.isArray(value);
            case "null":
                return value === null;
            default:
                return false;
        }
    }
    
    return typeof value === type;
}

function type_check_v2(value, conf) {
    for(key in conf) {
        switch (key) {
            case "value":
                if (JSON.stringify(value) !== JSON.stringify(conf.value)) {
                    return false;
                }
                break;
            case "type":
                if (! type_check_v1(value, conf.type)) {
                    return false;
                }
                break;
            case "enum":
                let found = false;
                for(subValue of conf.enum) {
                    found = type_check_v2(value, { value: subValue });
                    if (found) {
                        break;
                    }
                }
                if(! found) {
                    return false;
                }
                break;
        }
    }

    return true;
}

function type_check(value, conf) {
    for(key in conf) {
        switch (key) {
            case "value":
                if (JSON.stringify(value) !== JSON.stringify(conf.value)) {
                    return false;
                }
                break;
            case "type":
                if (! type_check_v1(value, conf.type)) {
                    return false;
                }
                break;
            case "enum":
                let found = false;
                for(subValue of conf.enum) {
                    found = type_check_v2(value, { value: subValue });
                    if (found) {
                        break;
                    }
                }
                if(! found) {
                    return false;
                }
                break;
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

/* Vérification pour la fonction type_check */
console.log(type_check("string", { type: "string", enum: ["test", "test2"] }));