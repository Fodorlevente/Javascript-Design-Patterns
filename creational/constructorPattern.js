const Repo = require('./taskRepository');


let Task = function(data) {
    this.name = data.name;
    this.completed = false;

    this.complete = () => {
        console.log(`completing task: ${this.name}`);
        this.completed = true;
    }

    this.save = () => {
        console.log(`saving task: ${this.name}`);
        Repo.save(this);
    }
}

module.exports = Task;