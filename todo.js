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

        let doneButton = document.createElement('button');
        doneButton.innerHTML = "DONE";
        doneButton.classList.add('doneButton');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        let toDoDate = document.createElement('div');
        toDoDate.classList.add('dateElement');
        const date= new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '\n' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        toDoDate.innerText = dateText;

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(doneButton);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        itemBox.appendChild(toDoDate);


        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

        doneButton.addEventListener('click', () => this.change(input));   
    }

    change(input) {
        input.style.color = 'green';
        input.style.textDecoration = 'line-through';
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

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