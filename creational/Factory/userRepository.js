let repo = () => {

    let db = {};

    let get = id => {
        console.log(`Getting user ${id}`);
        return {
            name: 'new user'
        }
    }

    let save = task => {
        console.log(`Saving ${task.name} to the db`);
    }

    return {
        get: get,
        save: save
    }

}

module.exports = repo();