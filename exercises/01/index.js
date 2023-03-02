const itemDescInput = document.querySelector('#description');
const amountInput = document.querySelector('#amount');

const clearFields = () => {
    itemDescInput.value = '';
    amountInput.value = '';
}

const calculateTotal = (totalArray) => {
    const totalParagraph = document.querySelector('#total');
    let sumTotal = 0;
    totalArray.forEach(number => sumTotal += number)
    totalParagraph.textContent = `Total $${sumTotal}`
}

const handleFormSubmit = () => {
    const formELement = document.querySelector('form');
    const ticketUL = document.querySelector('#ticket');
    const totalArray = []
    formELement.addEventListener('submit', (e) => {
        e.preventDefault();
        const newListItem = document.createElement('li');
        const newItemDescP = document.createElement('p');
        const newAmountP = document.createElement('p');
        newItemDescP.classList.add('capitalize')
        newItemDescP.textContent = itemDescInput.value;
        newAmountP.textContent = `$${amountInput.value}`;
        newListItem.append(newItemDescP, newAmountP);
        ticketUL.append(newListItem);
        totalArray.push((Number(amountInput.value)));
        calculateTotal(totalArray)
        clearFields();
    })
}

window.addEventListener('load', () => {
    clearFields();
    handleFormSubmit();
})