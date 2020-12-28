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
    }

    updateTask() {

    }

    deleteTask() {

    }
}
export { Todo }