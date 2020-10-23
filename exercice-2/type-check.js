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

/* Vérification pour la fonction type_check_v1 */
console.log(type_check_v1(1, "number"));
console.log(type_check_v1(1, "string"));
console.log(type_check_v1("2", "string"));
console.log(type_check_v1([1, 2], "array"));

/* Vérification pour la fonction type_check_v2 */