import alt from 'components/Dispatcher';
import ToDoTaskActions from './../actions/ToDoTasksActions';

export class ToDoTasksStore {

  constructor() {

    this.tasks = [];
    
    this.bindListeners({
      handleLoadTasks: ToDoTaskActions.LOAD_TASKS
    });
  
  }

  handleLoadTasks(param) {
    this.tasks = [
      { id: 1, body: 'Body Task 001', done: true },
      { id: 2, body: 'Body Task 002', done: false },
      { id: 3, body: 'Body Task 003', done: true },
      { id: 4, body: 'Body Task 004', done: false },
      { id: 5, body: 'Body Task 005', done: false },
      { id: 6, body: 'Body Task 006', done: false },
      { id: 7, body: 'Body Task 007', done: false },
      { id: 8, body: 'Body Task 008', done: false }
    ];
  }

}

export default alt.createStore(ToDoTasksStore, 'ToDoTasksStore');
