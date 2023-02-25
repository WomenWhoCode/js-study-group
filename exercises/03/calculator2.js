class Calculation {
    constructor() {
        this.value = '';
        this.operator = '';
    }
    updateValues(property, stringValue) {
        this[property] += stringValue;
    }
}

class Calculator {
    constructor() {
        this.total = '';
    }

    initializeNewCalculation() {
        this.calculation = new Calculation();
    }

    updateTotalOperation(newValue) {
        this.total = this.total.concat(" ", newValue)
    }

    clearAllValues() {
        this.calculation.value = '';
        this.total = '';
    }

    handleButtonClick() {
        const buttonsList = document.querySelectorAll('.calculator-button');
        buttonsList.forEach((button) => {
            button.addEventListener('click', (e) => {
                const buttonType = button.dataset.type;
                const buttonValue = e.target.value;
                if (buttonType === 'float-number-el') {
                    this.calculation.updateValues('value', buttonValue)
                }
                else if (buttonType === 'operator') {
                    this.calculation.updateValues('operator', buttonValue)
                    this.updateTotalOperation(this.calculation.value)
                    this.updateTotalOperation(this.calculation.operator)
                    this.initializeNewCalculation();
                }
                else if (buttonType === 'clear') {
                    this.clearAllValues();
                }
                else {
                    this.updateTotalOperation(this.calculation.value);
                    this.total = (eval(this.total)).toString();
                    this.initializeNewCalculation();
                }
            });
        });
    }
    // method to update div in the DOM that shows the total
}

window.addEventListener('load', () => {
    const calculator = new Calculator();
    calculator.handleButtonClick();
    calculator.initializeNewCalculation();
})