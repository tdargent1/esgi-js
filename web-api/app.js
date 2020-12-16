const root = document.getElementById("root");

const table = document.createElement("table");
const tbody = document.createElement("tbody");

const tdListener = (e) => {
    const td = e.currentTarget;
    const textNode = td.childNodes[0];
    const input = document.createElement("input");
    
    if(textNode.nodeName === "INPUT") return;

    input.value = textNode.textContent;
    input.addEventListener("blur", inputListener);
    td.replaceChild(input, textNode);
    input.focus();
};

const inputListener = (e) => {
    const input = e.currentTarget;
    const text = input.value;
    const textNode = document.createTextNode(text);
    
    input.removeEventListener("blur", inputListener);
    input.parentNode.replaceChild(textNode, input);
};

for(let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");

    for(let j = 0; j < 4; j++) {
        const td = document.createElement("td");
        const text = document.createTextNode("Test");

        tr.appendChild(td);
        td.addEventListener("click", tdListener);
        td.appendChild(text);
    }

    tbody.appendChild(tr);
}

table.appendChild(tbody);
root.appendChild(table);