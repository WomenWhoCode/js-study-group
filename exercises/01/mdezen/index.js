let newAmount=0;

function update(description, amount) {

    let list;
    list=`<li>${description} $${amount}</li>`
    
    newAmount= newAmount+ Number(amount);
    

    document.getElementById("ticket").insertAdjacentHTML("afterbegin",list) 
    document.getElementById("total").innerHTML=`Total:$ ${newAmount}`
    
}