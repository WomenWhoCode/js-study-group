const buttonElement = document.querySelector('button');
const itemDescInput = document.querySelector('#description');
const amountinput = document.querySelector('#amount');
const ticketUL = document.querySelector('#ticket');

const onButtonClick = () => {
    buttonElement.addEventListener('click', (e) => {
        const newListItem = document.createElement('li');
        const newItemDescP = document.createElement('p');
        const newAmountP = document.createElement('p');
        newItemDescP.textContent = itemDescInput.value;
        newAmountP.textContent = amountinput.value;
        newListItem.append(newItemDescP, newAmountP);
        ticketUL.append(newListItem);

    })
}

const clearFields = () => {
    itemDescInput.value = '';
    amountinput.value = '';
}

clearFields();
onButtonClick();