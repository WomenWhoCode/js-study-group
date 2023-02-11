let form = document.getElementById("receiptForm");
let totalSum = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let article = document.getElementById("article").value;
  let amount = +document.getElementById("amount").value;

  event.target.reset();

  let ticketContainer = document.getElementById("ticketContainer");
  const ticket = `
    <div class="ticket">
        <p class="article font-style"> ${article}</p>
        <p class="article font-style">$${amount}</p>
    </div>
    `;
  ticketContainer.innerHTML += ticket;
  let total = document.getElementById("sum");
  totalSum = totalSum + amount;
  total.innerHTML = totalSum;
});
