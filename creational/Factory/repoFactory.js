// const repoFactory = () => {
//     let repos = this;
//     let repoList = [{name: 'task', source: './taskRepository'},
//                     {name: 'user', source: './userRepository'},
//                     {name: 'project', source: './projectRepository'}];

//     repoList.forEach(repo => {
//         repos[repo.name] = require(repo.source)()
//     });

// };

// module.exports = repoFactory;


const repoFactory = () => {
    this.getRepo = (repoType) => {
        if(repoType === 'task') {
           let taskRepo = require('./taskRepository')();
           return taskRepo;
        }
        if(repoType === 'user'){
            let userRepo = requie('./userRepository')();
            return userRepo;
        }        
        if(repoType === 'project') {
            let projectRepo = requie('./projectRepository')();
            return projectRepo;
        }
    }
}

module.exports = repoFactory;
