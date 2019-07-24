const form = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const todo = form.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        form.reset();
    }

});

// console.log();
// console.log()

//delete todos

list.addEventListener('click', e => {
    if(e.target.clssList.contains('delete')){
        e.target.parentElement.remove();
    }

    // console.log(e.target.classlist);
});

// console.log(list.querySelectorAll('li'));
