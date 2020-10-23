String.prototype.ucfirst = function () {
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";
    
        return this.charAt(0).toUpperCase() + this.slice(1);
}
console.log("test".ucfirst());

String.prototype.capitalize = function (){
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";

    return this.split(' ').map(word => word.toLowerCase().ucfirst()).join(' ');
}
console.log("test test".capitalize());


String.prototype.camelCase = function camelCase(){
    return this.capitalize().replace(/\W/g, '');
}
console.log("test test".camelCase());


String.prototype.snake_case = function (){
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";

    return this.toLowerCase().replace(/\W/g, '_');
}
console.log("test test".snake_case());

String.prototype.leet = function (){
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";

    return this.replace(/[aeiouy]/gi, function(e){
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
console.log("anaconda".leet());

String.prototype.verlan = function (){
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";

    return this.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log("Hello World".verlan());

String.prototype.yoda = function (){
    if(typeof this.valueOf() !== "string" || this.valueOf() === "")
        return "";

    return this.split(" ").reverse().join(" ");
}
console.log("Hello World".yoda());


String.prototype.vig = function (string, code) {
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
console.log(vig('wikipedia', 'crypto'));