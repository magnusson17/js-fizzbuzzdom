let containerOne = document.getElementById("container-one");

for (let i = 1; i < 101; i++) {
    
    if (! (i % 3 === 0) && ! (i % 5 === 0)) {
        containerOne.innerHTML += `<div class="bg_1389B2 square">${[i]}</div>`;
    } else if (i % 3 === 0 && i % 5 === 0) {
        containerOne.innerHTML += `<div class="bg_F0466F square">fizzbuzz</div>`;
    } else if (i % 3 === 0) {
        containerOne.innerHTML += `<div class="bg_0BD6A1 square">fizz</div>`;
    } else if (i % 5 === 0) {
        containerOne.innerHTML += `<div class="bg_FFD166 square">buzz</div>`;
    }
}

