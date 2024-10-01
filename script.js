const display = document.getElementById('num');
function appendToDisplay(value) {
    
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0'; 
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1); 
    } else {
        display.value = '0'; 
    }
}

function perform() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error'; 
    }
}
