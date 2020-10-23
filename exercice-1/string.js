function ucfirst(text) {
    if(typeof text !== "string" || text === "")
        return "";
    
        return text.charAt(0).toUpperCase() + text.slice(1);
}
ucfirst('test');

function capitalize(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}
capitalize('test test');

function camelCase(text){
    return capitalize(text).replace(/\W/g, '');
}
camelCase('test test');

function snake_case(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.toLowerCase().replace(/\W/g, '_');
}
snake_case('test test');

function leet(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.replace(/[aeiouy]/gi, function(e){
        switch(e.toUpperCase()){
            case "A" :
                return 4;
            case "E" :
                return 3;
            case "I" :
                return 1;
            case "O" :
                return 0;
            case "U" :
                return "(_)";
            case "Y" :
                return 7;
        }
    });
}
leet('anaconda');

var prairie = {
    animal : {
        type : {
            name : "chien"
        }
    }
}
function prop_access(obj, text) {
    if (obj === "undefined") 
        return obj;
    if(typeof text !== "string" || text === "")
        return "";

    let access = text.split(".");
    let propPath = access[0];
    let value = obj;

    for (let i = 0; i < access.length; i++) {
        propPath += access[i];

        if (!value[access[i]]) {
            return obj + " n'existe pas";
        }
        value = value[access[i]];
    }

    return value;
}
prop_access(prairie, "animal.x");

function verlan(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
verlan("Hello World");

function yoda(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(" ").reverse().join(" ");
}
yoda("Hello world");

function vig(string, code) {
    if (typeof string !== "string") return "";
    if (string.length === 0) return string;
  
    while (code.length < string.length) {
      code += code;
    }
    code = code.substr(0, string.length);
    let codeIndex = 0;
  
    return string
      .split("")
      .map((letter, index) => {
        letter = letter.toLowerCase();
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode;
  
        if (letterNumber < 0 || letterNumber > 25) return letter;
  
        const codeNumber = code.charCodeAt(codeIndex) - aCode;
        codeIndex++;
  
        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
      })
      .join("");
}