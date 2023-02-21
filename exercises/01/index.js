let receiptTable = document.getElementById('receipt-table');
let element = document.getElementById('submit-btn');
let total = 0;

function onButtonClick(event) {
  event.preventDefault();

  let article = document.getElementById('article').value;
  let value = parseInt(document.getElementById('amount').value);

  let row = receiptTable.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.classList.add('article-cell');
  cell2.classList.add('amount-cell');

  cell1.textContent = article;
  cell2.textContent = `$${value}`;

  total += value;
  document.getElementById('total-amount').textContent = `$${total}`;

  document.getElementById('form').reset();
}

element.addEventListener('click', onButtonClick);
