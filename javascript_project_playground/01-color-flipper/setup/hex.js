const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randomColor = generateRandomHexValue();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function generateRandomHexValue(){
        let randomColor = "";
        for (let index = 0; index < 6; index++) {
            randomColor += hex[Math.floor(Math.random() * hex.length)];
        }    
        return '#' + randomColor;
}