function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
const getStudents = function (resolve) {
    const timeout = randomInt(1, 2);
    setTimeout(
        () =>
        console.log(`getStudents:${timeout}`) ||
        resolve([
            { name: "Dupont", cours: [1, 3, 5] },
            { name: "Lea", cours: [2, 4] },
            { name: "Charles", cours: [1] },
        ]),
        timeout
    );
};
  
const getCourses = function (resolve) {
    const timeout = randomInt(2, 4);
    setTimeout(
        () =>
        console.log(`getCourses:${timeout}`) ||
        resolve([
            { id: 1, name: "JS" },
            { id: 2, name: "PHP" },
            { id: 3, name: "C#" },
            { id: 4, name: "F#" },
            { id: 5, name: "CSS" },
        ]),
        timeout
    );
};