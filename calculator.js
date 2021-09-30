class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand
    }
}

const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const operationButtons = document.querySelectorAll('[data-operations]');
const numberButtons = document.querySelectorAll('[data-numbers]');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButton.addEventListener("click", ()=>{
    calculator.clear();
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", ()=>{
    calculator.delete();
    calculator.updateDisplay();
})

operationButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})