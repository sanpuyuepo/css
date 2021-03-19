let checklist = document.getElementById('checklist');
let items = checklist.querySelectorAll('li');
let inputs = checklist.querySelectorAll('input')

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', editItem);
    inputs[i].addEventListener('blur', updateItem)
    inputs[i].addEventListener('keypress', itemKeypress)
}

function editItem() {
    this.className = 'edit';
    let input = this.querySelector('input');
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = '';
}

function itemKeypress(event) {
    if (event.which === 13) {
        updateItem.call(this);
    }
}
