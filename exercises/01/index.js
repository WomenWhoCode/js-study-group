const $ = document;
const ARTICLE_DESCRIPTION = $.getElementById('description');
const AMOUNT_INPUT = $.getElementById('amount');
const BUTTON = $.getElementById('btn');
const TOTAL = $.getElementById('total');
const LIST = $.getElementById('ticket');
const items = [];

/*
    - can optimize for the performance
    - can we have the enum or interface kind in JS for the DOM elements?
*/

const updateTotal = (items) => {
    TOTAL.innerHTML = getTotal(items)
}

const updateDOM = (items) =>{
    LIST.innerHTML = printItems(items)
}

const getArticles = (e) => {
    e.preventDefault();
    const itemName = ARTICLE_DESCRIPTION.value;
    const itemPrice = Number(AMOUNT_INPUT.value);
    items.push({itemName, itemPrice });
    
    if(items.length){
        updateTotal(items);
        updateDOM(items)
    }
}

const getTotal = (items) => {
    let intialTotal = 0;
    items.map((value) => {
        intialTotal = value.itemPrice + intialTotal;
    })  
   return intialTotal;
}

const printItems = (items) => {
    let initalDOM = '';
     items.map((value) => {
        initalDOM = initalDOM + `<li>${value.itemName} : ${value.itemPrice}</li>`;
    })  
    return initalDOM
}

BUTTON.addEventListener( 'click', getArticles);
