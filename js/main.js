import { Todo } from './components/Todo.js';

const addNewTask = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');

const todo = new Todo({
    selector: 'main'
});

todo.init();



addNewTask.addEventListener('click', () => {
    lightbox.classList.add('show');
})