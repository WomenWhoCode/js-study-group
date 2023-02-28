const dataKeyValues= {
    "A": "65",
    "S": "83",
    "D":"68",
    "F": "70",
    "G": "71",
    "H": "72",
    "J": "74",
    "K": "75",
    "L": "76"

}

window.addEventListener("keydown", event=> {
    const keyName= event.key.toUpperCase();
    document.querySelector(`audio[data-key="${dataKeyValues[keyName]}"]`).play();
}
    )