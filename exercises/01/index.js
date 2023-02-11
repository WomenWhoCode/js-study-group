let receiptForm = document.getElementById("receiptForm");
let totalSum = 0;
receiptForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let article = document.getElementById("article").value;
  let amount = +document.getElementById("amount").value;
  let ticketContainer = document.getElementById("ticketContainer");
  let total = document.getElementById("sum");

  event.target.reset();

  const ticket = `
    <div class="ticket">
        <p class="input-data font-style"> ${article}</p>
        <p class="input-data font-style">$${amount}</p>
    </div>
    `;

  ticketContainer.innerHTML += ticket;

  totalSum += amount;
  total.innerHTML = totalSum;
});
