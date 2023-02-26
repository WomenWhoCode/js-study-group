class Calculator {
    constructor() {
        this.currentValue = '';
        this.previousValue = '';
        // this.totalParagraph = document.querySelector('.total');
        // this.currentCalcParagraph = document.querySelector('.current-calc')
    }

    // updateParagraph() {
    //     if (!this.total) {
    //         this.totalParagraph.textContent = '0';
    //     } else {
    //         this.totalParagraph.textContent = this.total;
    //     }
    // }

    clearAllValues() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';
    }

    compute(a, b, operator) {
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
            }
        }
        return this.operations[operator](a, b);
    }

    initializeNumberButtons() {
        const numberButtons = document.querySelectorAll('[data-type="float-number-el"]');
        numberButtons.forEach((numberBtn) => {
            numberBtn.addEventListener('click', (e) => {
                this.currentValue += e.target.value;
                console.log(this);
            });
        });
    }

    initializeOperatorButtons() {
        const operatorButtons = document.querySelectorAll('[data-type="operator"]');
        operatorButtons.forEach((operatorBtn) => {
            operatorBtn.addEventListener('click', (e) => {
                if (!this.previousValue) {
                    this.previousValue = Number(this.currentValue);
                    this.operator = e.target.value;
                    this.currentValue = '';
                    this.total = 0;
                    console.log(this);
                } else {
                    this.currentValue = Number(this.currentValue);
                    this.previousValue = this.compute(this.previousValue, this.currentValue, this.operator);
                    this.currentValue = '';
                    this.operator = e.target.value;
                    console.log(this);
                }
            });
        });
    }

    initializeClear() {
        const clearButton = document.querySelector('[data-type="clear"]');
        clearButton.addEventListener('click', () => {
            this.clearAllValues();
            console.log(this);
        });
    }

    initializeEqual() {
        const equalButton = document.querySelector('[data-type="equal"]')
        equalButton.addEventListener('click', () => {
            this.currentValue = Number(this.currentValue);
            this.total = this.compute(this.previousValue, this.currentValue, this.operator);
            this.clearAllValues();
            console.log(this);
        });
    }
    // method to update div in the DOM that shows the total
}

window.addEventListener('load', () => {
    const calculator = new Calculator();
    calculator.initializeNumberButtons();
    calculator.initializeOperatorButtons();
    calculator.initializeClear();
    calculator.initializeEqual();
});