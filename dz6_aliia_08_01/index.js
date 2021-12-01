let count = 0;
const counter = () => {
    const innerCount = document.getElementById("count")
    innerCount.innerText = count;
}

const plus = () => {
    count++;
    counter();
}
const minus = () => {
    count --;
    counter();
}
const reset = () => {
    count = 0;
    counter();
}

