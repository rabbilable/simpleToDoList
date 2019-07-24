const form = document.querySelector('.add');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.add.value)
})