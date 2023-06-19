// se crean constantes de los botones y el contador
const decreaseButton = document.getElementById("decrease");
const stopButton = document.getElementById("stop");
const increaseButton = document.getElementById("increase");
const paragraph = document.getElementById("counterParagraph")

let counter = 0;
paragraph.textContent =  counter;
let reset=0;
let increase=0;
let decrease=0;


decreaseButton.addEventListener('click', async () => {
    reset=0;
    decrease=1;
    increase=0;
    while (reset == 0 && increase==0) {
        counter--;
        paragraph.textContent = counter;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
});


stopButton.addEventListener('click',async()=>{
    counter=0;
    paragraph.textContent = counter;
    reset=1;
})

increaseButton.addEventListener('click', async () => {
    reset=0;
    increase=1;
    decrease=0;
    while (reset == 0 && decrease==0) {
        counter++;
        paragraph.textContent = counter;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
});

