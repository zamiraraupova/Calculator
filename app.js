const ac = document.querySelector('.ac');
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equal = document.querySelector('[data-equals]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const textElement = document.querySelector('[data-current-operand]')



function compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
}

calculator{

}

function display(val){
    document.getElementById('result').value += val
    return val

}

numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operations.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equal.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

clear.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})



