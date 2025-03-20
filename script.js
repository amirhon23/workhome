//1
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
document.getElementById('item1').textContent = getRandomNumber();
document.getElementById('item2').textContent = getRandomNumber();
document.getElementById('item3').textContent = getRandomNumber();
//2
let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
let colors = ["red", "green", "blue", "black", "yellow", "red"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let a = Math.floor(Math.random() * (i + 1));
        [array[i], array[a]] = [array[a], array[i]];
    }
    return array;
}
let shuffledNames = shuffleArray(names);
let shuffledColors = shuffleArray(colors);

let items = document.querySelectorAll('p');

items.forEach((item, index) => {
    item.textContent = shuffledNames[index];
    item.style.color = shuffledColors[index];
});