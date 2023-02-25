// Add event listeners to buttons, for click 
// Store the value of the buttons
// I think we need to use string concatenation to capture the numbers and the float decimal
// When user clicks on +, -, x, / assign the concatenated string to a variable
// Convert from a string to a number using Number() 
// store the value of the button
// create a new variable that starts at 0 
// repeat the process with concatenating the new button inputs
// when user clicks = sign 
    // the concatenated string is converted to a number 
    // we do the actual math operation using the three variables 
    // use the switch case thing there
    // create a p element
    // display the total of the math operation on the dom with the p element


// In terms of classes, we can start with a class of Operation maybe? 
// Each instance has those three variables 
// And methods to populate them 

// check this with more energy https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/

class Operation {
    constructor() {
        this.value1;
        this.value2;
        this.operator;
    }
    calculateTotal() {
        switch(this.operator) {
            case 'add':
                return this.total = this.value1 + this.value2;
                break;
            case 'subtract': 
                return this.total = this.value1 - this.value2;
                break;
            case 'multiply':
                return this.total = this.value1 * this.value2;
                break;
            case 'divide':
                return this.total = this.value1 / this.value2;
                break;
            default: 
                return this.total = 'Error'
        }
    }

    updateValueOne(stringValue) {
        this.value1 = Number(stringValue)
        console.log(this.value1);
    }
    updateValueTwo(stringValue) {
        this.value2 = Number(stringValue)
        console.log(this.value2);
    }
    updateOperator(operator) {
        this.operator = operator;
    }
}

const calculateTotal = () => {
    const buttons = document.querySelectorAll('button');
    let stringValue1 = '0';
    let stringValue2 = '0'
    const newCalculation = new Operation();
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // console.log(e);
            if (e.target.dataset.type === "operator") {
                newCalculation.updateOperator(e.target.value)
            }
            if (!newCalculation.value1 && e.target.dataset.type === "float-number-el") {
                stringValue1 += e.target.value
                newCalculation.updateValueOne(stringValue1)
            } else if (newCalculation.value1 && e.target.dataset.type === "float-number-el") {
                // If statement not working, maybe an async await?? Await for the operator to be truthy? 
                stringValue2 += e.target.value;
                newCalculation.updateValueTwo(stringValue2);
            }
        })
    })
}
calculateTotal();