const Task = require('./task');
const taskRepo = require('./taskRepository');
const userRepo = require('./userRepository');
const projectRepo = require('./projectRepository');

let task1 = new Task(taskRepo.get(1));

let user = userRepo.get(1);
let project = projectRepo.get(1);

task1.user = user;
task1.project = project;

task1.save();