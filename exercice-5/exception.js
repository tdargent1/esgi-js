function UndefinedPropertyError(path, property, object) {
    console.log("Property '{property}' not exist for path '{path}', expected one of : [type, name]");
}

Object.prototype.prop_access = function (text) {
    if (this === "undefined") 
        return this;
    if(typeof text !== "string" || text === "")
        return "";

    let access = text.split(".");
    let propPath = access[0];
    let value = this;

    for (let i = 0; i < access.length; i++) {
        propPath += access[i];

        if (!value[access[i]]) {
            return this + " n'existe pas";
        }
        value = value[access[i]];
    }

    return value;
}
var prairie = {
    animal : {
        type : {
            name : "chien"
        }
    }
}
console.log(prairie.prop_access('animal.type.name'));