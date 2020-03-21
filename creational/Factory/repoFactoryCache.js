const repoFactory = () => {

    this.getRepo = repoType => {
        if(repoType === 'task') {
            if(this.taskRepo){
                console.log('Retriving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = requie('./taskRepository')();
                return this.taskRepo;
            }
        }
        if(repoType === 'user'){
            let userRepo = requie('./userRepository')();
            return userRepo;
        }        
        if( repoType === 'project') {
            let projectRepo = requier('./projectRepository')();
            return projectRepo;
        }
    }
    
}