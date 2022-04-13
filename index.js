const addButton = document.querySelector('.addButton');

let input = document.querySelector('.input');

const container = document.querySelector(".container");

const secondButton = document.querySelector('.second')

let a = []

class item{
    constructor(itemName){
        //item divi yaradir

        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input')
        input.value = itemName;
        item.disabled = true;
        input.classList.add('item-input');
        input.type = 'text'

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        

        let editButton = document.createElement('button')
        editButton.innerHTML = "EDIT"
        editButton.classList.add('editButton')

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton)
        itemBox.appendChild(removeButton)
        
        editButton.addEventListener('click',() => this.edit(input))

        removeButton.addEventListener('click',() => this.remove(itemBox))
    }

    edit(input){
        input.disabled = !input.disabled
    }

    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        a.push(input.value)
        input.value = ""
    }
}

addButton.addEventListener('click', check);

window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        check();
        
    }
})

console.log(a)
