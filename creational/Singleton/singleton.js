const TaskRepo = ( function () {
    let taskRepo;
    function crateRepo() {
        let taskRepo = new Object("Task");
        return taskRepo;
    }
    return {
        getInstance: function () {
            if (!taskRepo) { 
                taskRepo = crateRepo();
            }
            return taskRepo;
        }
    };
})();


const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

if(repo1 === repo2) {
    console.log("Same instance");
}