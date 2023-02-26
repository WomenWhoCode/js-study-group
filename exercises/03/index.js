class Calculator {
    constructor() {
        this.currentValue = '';
        this.previousValue = '';
    }

    populateCalcDisplay(topValue, bottomValue) {
        const displayTop = document.querySelector('.calculator-display-top');
        const displayBottom = document.querySelector('.calculator-display-bottom');
        displayTop.textContent = topValue;
        displayBottom.textContent = bottomValue;
    }

    clearAllValues() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';
        this.total = '';
        this.populateCalcDisplay('0', '0');
    }

    calculate(a, b, operator) {
        this.operations = {
            '+': function (a, b) {
                return a + b
            }, 
            '-': function (a, b) {
                return a - b
            }, 
            '*': function (a, b) {
                return a * b
            },
            '/': function (a, b) {
                return a / b
            },
        }
        return this.operations[operator](a, b);
    }

    updatePreviousValue(operatorValue) {
        this.previousValue = Number(this.currentValue);
        this.operator = operatorValue;
        this.currentValue = '';
        this.populateCalcDisplay(`${this.previousValue} ${this.operator}`, '0');
    }

    computeValues(value, operator) {
        this.currentValue = Number(this.currentValue);
        this[value] = this.calculate(this.previousValue, this.currentValue, this.operator);
        this.operator = operator;
        this.currentValue = '';
    }

    initializeNumberBtns() {
        const numberButtons = document.querySelectorAll('[data-type="float-number-el"]');
        numberButtons.forEach((numberBtn) => {
            numberBtn.addEventListener('click', (e) => {
                this.currentValue += e.target.value;
                if (this.total) {
                    this.clearAllValues();
                    return
                }
                if (!this.previousValue) {
                    this.populateCalcDisplay('0', this.currentValue)
                }
                else {
                    this.populateCalcDisplay(`${this.previousValue} ${this.operator}`, this.currentValue)
                } 
            });
        });
    }

    initializeOperatorBtns() {
        const operatorButtons = document.querySelectorAll('[data-type="operator"]');
        operatorButtons.forEach((operatorBtn) => {
            operatorBtn.addEventListener('click', (e) => {
                const operatorValue = e.target.value;
                if (this.total) {
                    this.clearAllValues();
                    return
                }
                else if (!this.previousValue) {
                    this.updatePreviousValue(operatorValue)
                }
                else {
                    this.computeValues('previousValue', operatorValue)
                    this.populateCalcDisplay(`${this.previousValue} ${this.operator}`, '0')
                }
            });
        });
    }

    initializeClearBtn() {
        const clearButton = document.querySelector('[data-type="clear"]');
        clearButton.addEventListener('click', () => {
            this.clearAllValues();
        });
    }

    initializeEqualBtn() {
        const equalButton = document.querySelector('[data-type="equal"]')
        equalButton.addEventListener('click', (e) => {
            this.computeValues('total', '')
            this.populateCalcDisplay(e.target.value, this.total)
            this.previousValue = '';
        });
    }
}

window.addEventListener('load', () => {
    const calculator = new Calculator();
    calculator.initializeNumberBtns();
    calculator.initializeOperatorBtns();
    calculator.initializeClearBtn();
    calculator.initializeEqualBtn();
    calculator.populateCalcDisplay('0', '0');
});