function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
const getStudents = function () {
    return fetch("http://localhost:3000/students")
        .then((response) => response.json())
        .then((data) => data);
};
  
const getCourses = function () {
    return fetch("http://localhost:3000/courses")
        .then((response) => response.json())
        .then((data) => data);
};
  
const mapping = function (resolve) {
    const timeout = randomInt(1, 4);
    setTimeout(
        () => Promise.all([getStudents(), getCourses()]).then((results) => {
            const students = results[0];
            const courses = results[1];
            console.log(`mapping:${timeout}`);
            resolve(
                students.map((student) => {
                    student.cours = student.cours.map((id) =>
                        courses.find((cours) => cours.id === id)
                    );
                    return student;
                })
            );
        }),
        timeout
    );
};
  
const timer = function (_, reject) {
    setTimeout(() => reject("Timeout"), 20000);
};
  
Promise.race([new Promise(mapping), new Promise(timer)])
    .then((results) => console.log(results) || console.log("Merge OK"))
    .catch((error) => console.error(error));