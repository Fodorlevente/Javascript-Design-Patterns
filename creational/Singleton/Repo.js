const repo = () => {
    let called = 0;

    let save = (task) => {
        called++;
        console.log(`Saving ${task}. Called ${called} times`);
    }
    console.log('newing up task repo');
    return {
        save: save
    }
}

module.exports = repo();