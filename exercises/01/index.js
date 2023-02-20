const insertItem = () => {
    let itemDescription = document.getElementById('itemDescription').value
    let itemPrice = parseInt(document.getElementById('itemPrice').value)
    let itemList = document.getElementById('itemList')
    let itemTotal = parseInt(document.getElementById('ticketTotal').innerHTML)
    let listItem = itemDescription + ` $ ${itemPrice}`
    let newItem = document.createElement('li')
    newItem.innerHTML = listItem 
    itemList.appendChild(newItem)
    document.getElementById('ticketTotal').innerHTML = itemTotal + itemPrice
} 
