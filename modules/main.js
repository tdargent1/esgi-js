import { getStudents, getCourses } from "./api.js";
import timerAwait from "./TimerAwait.js";

const mapping = async function () {
    const results = await Promise.all([getStudents(), getCourses()]);
    const students = results[0];
    const courses = results[1];
    return students.map((student) => {
        student.cours = student.cours.map((id) =>
            courses.find((cours) => cours.id === id)
        );
    return student;
    });
};

Promise.race([mapping(), timerAwait()])
    .then((results) => console.log(results) || console.log("Merge OK"))
    .catch((error) => console.error(error));