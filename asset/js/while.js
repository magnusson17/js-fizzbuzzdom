// se multiplo di 3: "fizz", color aqua
// se multiplo di 5: "buzz", color orange 
// se multiplo di 3 & 5: "fizzbuzz", color magenta 

let containerOne = document.getElementById('container-one');

let i = 0

while(i < 100) {
    i++
    if( (i % 5 === 0) && (i % 3 === 0) ) {
        containerOne.innerHTML += `<div class="bg_F0466F square">fizzbuzz</div>`;
    }
    else if( i % 5 === 0 ) {
        containerOne.innerHTML += `<div class="bg_FFD166 square">buzz</div>`;
    }
    else if( (i % 3 === 0) ) {
        containerOne.innerHTML += `<div class="bg_0BD6A1 square">fizz</div>`;
    } else {
        containerOne.innerHTML += `<div class="bg_1389B2 square">${i}</div>`;
    }
}