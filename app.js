const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>
    </li>`;
    todos.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }

});

todos.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const searchTerm = term => {
    Array.from(todos.children).forEach(todo => {
        if (todo.textContent.toLowerCase().includes(term)) {
            todo.classList.remove('filtered');
        } else {
            todo.classList.add('filtered');
        }
    });
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    searchTerm(term);
})