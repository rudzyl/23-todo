class Todo {
    constructor(params) {
        this.selector = params.selector;

        this.DOM = null;
        this.taskList = [];
    }
    init() {
        //validation
        if(!this.isValidSelector()) {
            return false;
        }
        this.updateStyle()
        //render
        //add events 
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    updateStyle() {
        if(!this.DOM.classList.contains('list')) {
            this.DOM.classList.add('list')

        }
    }

    addTask(task) {
        this.taskList.push(task);
        this.renderList();
        return true;
    }

    generateItem(task) {
        return `<div class="item">
                    <p>${task.text}</p>
                    <div class="actions">
                        <div class="btn small edit">Edit</div>
                        <div class="btn small remove">Remove</div>
                    </div>
                </div>`;
    }

    renderList() {
        let HTML = '';
        for (let item of this.taskList) {
            HTML += this.generateItem(item);
        }
        this.DOM.innerHTML = HTML;
        this.addEvents();
    }

    updateTask() {

    }

    deleteTask(taskIndex) {
        this.taskList = this.taskList.filter((item, index) => index !== taskIndex);
        this.renderList();
    }

    addEvents() {
        const items = this.DOM.querySelectorAll('.item');
        
        for(let i=0; i < items.length; i++) {
            const item = items[i];
            const editBtn = item.querySelector('.btn.edit');
            const removeBtn = item.querySelector('.btn.remove');

            editBtn.addEventListener('click', () => {
                this.initTodoItemEditing(i);
            })
            removeBtn.addEventListener('click', () => {
                this.deleteTask(i);
            })
        }
    }

    initTodoItemEditing(taskIndex) {
        const task = this.taskList[taskIndex];

        const lightbox = document.querySelector('.lightbox');
        const formUpdate = lightbox.querySelector('form.update');
        const textarea = formUpdate.querySelector('textarea');
        const buttonCancel = formUpdate.querySelector('button.cancel');
        const buttonUpdate = formUpdate.querySelector('button.update');

        lightbox.classList.add('show');
        textarea.value = task.text;
        lightbox.dataset.form = 'update';

        buttonCancel.addEventListener('click', e => {
            e.preventDefault();
            lightbox.classList.remove('show');
        })
        buttonUpdate.addEventListener('click', e => {
            e.preventDefault();
            this.taskList[taskIndex].text = textarea.value;
            lightbox.classList.remove('show');
            this.renderList();
        })
    }

}
export { Todo }