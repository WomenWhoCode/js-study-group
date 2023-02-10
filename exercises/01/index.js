const itemDescInput = document.querySelector('#description');
const amountinput = document.querySelector('#amount');

const clearFields = () => {
    itemDescInput.value = '';
    amountinput.value = '';
}

const calculateTotal = (array) => {
    const totalParagraph = document.querySelector('#total');
    let sumTotal = 0;
    array.forEach(number => sumTotal += number)
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
        newAmountP.textContent = `$${amountinput.value}`;
        newListItem.append(newItemDescP, newAmountP);
        ticketUL.append(newListItem);
        totalArray.push((Number(amountinput.value)));
        calculateTotal(totalArray)
        clearFields();
    })
}

clearFields();
handleFormSubmit();