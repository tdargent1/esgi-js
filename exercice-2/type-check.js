function type_check_v1(value, type) {
    if (Array.isArray(value)) {
        return type == "array";
    }
    
    if (value === null) {
        return type == "null";
    }

    return type === (typeof value);
}

/* Vérification pour la fonction type_check_v1 */
console.log(type_check_v1(1, "number"));
console.log(type_check_v1(1, "string"));
console.log(type_check_v1("2", "string"));
console.log(type_check_v1([1, 2], "array"));

/* Vérification pour la fonction type_check_v2 */