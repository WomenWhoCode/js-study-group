class View {
    constructor() {
        this.displayTop = document.querySelector('.calculator-display-top');
        this.displayBottom = document.querySelector('.calculator-display-bottom')
        this.numberButtons = document.querySelectorAll('[data-type="float-number-el"]');
        this.operatorButtons = document.querySelectorAll('[data-type="operator"]');
        this.clearButton = document.querySelector('[data-type="clear"]');
        this.equalButton = document.querySelector('[data-type="equal"]')
    }
    populateCalcDisplay(topValue, bottomValue) {
        this.displayTop.textContent = topValue;
        this.displayBottom.textContent = bottomValue;
    }
}

class Calculator {
    constructor(view) {
        this.currentValue = '';
        this.previousValue = '';
        this.view = view;
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
    }

    clearAllValues() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';
        this.total = '';
        this.view.populateCalcDisplay('0', '0');
    }

    calculate(a, b, operator) {
        return this.operations[operator](a, b);
    }

    checkForTotal() {
        if (this.total) {
            this.clearAllValues();
            return
        }
    }

    computeValues(value, operator) {
        this.currentValue = Number(this.currentValue);
        this[value] = this.calculate(this.previousValue, this.currentValue, this.operator);
        this.operator = operator;
        this.currentValue = '';
    }

    updatePreviousValue(operatorValue) {
        this.previousValue = Number(this.currentValue);
        this.operator = operatorValue;
        this.currentValue = '';
        this.view.populateCalcDisplay(`${this.previousValue} ${this.operator}`, '0');
    }

    initializeNumberBtns() {
        this.view.numberButtons.forEach((numberBtn) => {
            numberBtn.addEventListener('click', (e) => {
                this.checkForTotal();
                this.currentValue += e.target.value;

                if (!this.previousValue) {
                    this.view.populateCalcDisplay('0', this.currentValue)
                }
                else {
                    this.view.populateCalcDisplay(`${this.previousValue} ${this.operator}`, this.currentValue)
                } 
            });
        });
    }

    initializeOperatorBtns() {
        this.view.operatorButtons.forEach((operatorBtn) => {
            operatorBtn.addEventListener('click', (e) => {
                this.checkForTotal();
                const operatorValue = e.target.value;
                if (!this.previousValue) {
                    this.updatePreviousValue(operatorValue)
                }
                else {
                    this.computeValues('previousValue', operatorValue)
                    this.view.populateCalcDisplay(`${this.previousValue} ${this.operator}`, '0')
                }
            });
        });
    }

    initializeClearBtn() {
        this.view.clearButton.addEventListener('click', () => {
            this.clearAllValues();
        });
    }

    initializeEqualBtn() {
        this.view.equalButton.addEventListener('click', (e) => {
            this.computeValues('total', '')
            this.view.populateCalcDisplay(e.target.value, this.total)
            this.previousValue = '';
        });
    }
}

window.addEventListener('load', () => {
    const view = new View()
    const calculator = new Calculator(view);
    calculator.initializeNumberBtns();
    calculator.initializeOperatorBtns();
    calculator.initializeClearBtn();
    calculator.initializeEqualBtn();
    calculator.clearAllValues();
});