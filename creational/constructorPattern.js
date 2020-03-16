let Task = function(name) {
    this.name = name;
    this.completed = false;

    this.complete = () => {
        console.log(`completing task: ${this.name}`);
        this.completed = true;
    }

    this.save = () => {
        console.log(`saving task: ${this.name}`);
    }
}

module.exports = Task;