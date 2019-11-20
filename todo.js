const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
var search = document.querySelector('.input_search');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let toDoDate = document.createElement('div');
        toDoDate.classList.add('dateElement');
        const date = new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '\n' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        toDoDate.innerText = dateText;

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(toDoDate);


function check() {
    if(input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);

window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        check();
    }
})