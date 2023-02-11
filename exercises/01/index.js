const $ = document;
const ARTICLE_DESCRIPTION = $.getElementById('description');
const ARTICLE_AMOUNT = $.getElementById('amount');
const BUTTON = $.getElementById('btn');
const TOTAL = $.getElementById('total');
const LIST = $.getElementById('ticket');
const PRODUCT_OUTPUT = $.getElementById('productList');
const items = [];

const updateDOM = ( items) => {
    printItems(items);
   const itemsListandTotal =  printItems(items) + getTotal(items);
   PRODUCT_OUTPUT.innerHTML = itemsListandTotal;
}

const getArticlesList = (e) => {
    e.preventDefault();
    const itemName = ARTICLE_DESCRIPTION.value;
    const itemPrice = Number(ARTICLE_AMOUNT.value);
    items.push({itemName, itemPrice });
    
    if(items.length){
        updateDOM(items);
    }
}

const getTotal = (items) => {
    let intialTotal = 0;
     const total = items.reduce((accum, currentValue) => {
       return accum + currentValue.itemPrice
    },intialTotal )  
     return `<p>Total $: ${total} </p>`;
}

const printItems = (items) => {
    let initalDOM = '';
     items.map((value) => {
        initalDOM = initalDOM + `<li>${value.itemName} : <span>$${value.itemPrice}</span></li>`;
    })  
    return `<ul>${initalDOM}</ul>`
}

BUTTON.addEventListener( 'click', getArticlesList);
