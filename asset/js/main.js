let containerOne = document.getElementById("container-one");

for (let i = 1; i < 101; i++) {
    
    if (! (i % 3 === 0) && ! (i % 5 === 0)) {
        containerOne.innerHTML += `<div class="bg_blue">${[i]}</div>`;
    } else if (i % 3 === 0 && i % 5 === 0) {
        containerOne.innerHTML += `<div class="bg_purple">fizzbuzz</div>`;
    } else if (i % 3 === 0) {
        containerOne.innerHTML += `<div class="bg_aqua">fizz</div>`;
    } else if (i % 5 === 0) {
        containerOne.innerHTML += `<div class="bg_orange">buzz</div>`;
    }
}