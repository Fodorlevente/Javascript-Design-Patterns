const myrepo = require('./Repo');

const taskHandler = () => {
    return {
        save: () => {
            myrepo.save('Hi from taskHandler');
        }
    }
}

module.exports =  taskHandler();