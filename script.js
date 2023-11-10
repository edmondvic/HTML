let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}


function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = Math.sqrt(number);
            currentInput = result.toString();
            document.getElementById('display').value = result;
        } else {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculateSin() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = Math.sin(number);
            currentInput = result.toString();
            document.getElementById('display').value = result;
        } else {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculateCos() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = Math.cos(number);
            currentInput = result.toString();
            document.getElementById('display').value = result;
        } else {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}

function calculateTan() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = Math.tan(number);
            currentInput = result.toString();
            document.getElementById('display').value = result;
        } else {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
} 

function calculatePerc() {
    try {
        const result = 
eval(currentInput)/100;
          currentInput = result.toString();
document.getElementById('display').value = result;
        
    } catch (error) {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
}
 

function calculatePi() {
    currentInput += Math.PI;
    document.getElementById('display').value = currentInput;
} 

function calculateLog() {
    try {
        const number = parseFloat(currentInput);
        if (!isNaN(number)) {
            const result = Math.log(number);
            currentInput = result.toString();
            document.getElementById('display').value = result;
        } else {
            currentInput = '';
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
} 

