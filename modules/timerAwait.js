export default async function timerAwait() {
    setTimeout(() => {
        throw "Timeout";
    }, 20000);
}