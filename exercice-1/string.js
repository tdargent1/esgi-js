function ucfirst(text) {
    if(typeof text !== "string" || text === "")
        return "";
    
        return text.charAt(0).toUpperCase() + text.slice(1);
}
ucfirst('test');

function capitalize(text){
    if(typeof text !== "string" || text === "")
        return "";
    
    const words = text.split(' ');

    let chaine = "";
    for(word of words){
        chaine += ucfirst(word) + " ";
    }

    return chaine.trim();
}
capitalize('test test');

function camelCase(text){
    text = capitalize(text);

    return text.replace(' ', '');

}
camelCase('test test');

function snake_case(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.toLowerCase().replace(' ', '_');

}
snake_case('test test');

function leet(text){
    if(typeof text !== "string" || text === "")
        return "";
        
    let chaine = "";
    for(letter of text){
        switch(letter.toUpperCase()){
            case "A" :
                chaine += "4";
                break;
            case "E" :
                chaine += "3";
                break;
            case "I" :
                chaine += "1";
                break;
            case "O" :
                chaine += "0";
                break;
            case "U" :
                chaine += "(_)";
                break;
            case "Y" :
                chaine += "7";
                break;
            default:
                chaine += letter;
        }
    }

    return chaine;
}
leet('anaconda');

/*var prairie = {
    animal : {
        Type : {
            Name : "chien"
        }
    }
}
function prop_access(obj, path){
    if(typeof text !== "string" || text === "")
        return "";

}
console.log(prop_access(prairie, "animal.type"));*/

function verlan(text){
    if(typeof text !== "string" || text === "")
        return "";

    const words = text.split(' ');

    let chaine = "";
    for(word of words){
        chaine += word.split("").reverse().join("") + " ";
    }
    return chaine.trim();
}
verlan("Hello World");

function yoda(text){
    if(typeof text !== "string" || text === "")
        return "";

    return text.split(" ").reverse().join(" ");
    
}
yoda("Hello world");

/*function vig(text){
    if(typeof text !== "string" || text === "")
        return "";
    
}*/