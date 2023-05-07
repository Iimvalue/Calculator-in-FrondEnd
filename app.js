const keys = document.getElementById('keys');
const display = document.querySelector('.display');

keys.addEventListener('click', (event) => {
    let target = event.target;

    if (!target.matches('button')) {
        return false
    } // for disabled the area between buttons


    if (target.classList.contains('equal')) {
        // try and catch for any Error calc
        try {
            display.value = eval(display.value);
        } catch {
            alert('Error input');
            display.value = '';
        }

    } else if (target.classList.contains('all-clear')) { // if press AC then clear all in calc display
        display.value = '';
    } else {
        display.value += target.value; // to show what number that user press
    }


})