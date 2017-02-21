import alt from 'components/Dispatcher';
import ToDoTaskActions from './../actions/ToDoTasksActions';
import ToDoListSource from './../sources/ToDoListSource';

export class ToDoTasksStore {

  constructor() {

    this.tasks = [];
    
    this.bindListeners({
      handleLoadTasks: ToDoTaskActions.LOAD_TASKS,

      handleGetToDoTasks: ToDoTaskActions.GET_TO_DO_TASKS,
      handleGetToDoTasksOk: ToDoTaskActions.GET_TO_DO_TASKS_OK,
      handleGetToDoTasksFail: ToDoTaskActions.GET_TO_DO_TASKS_FAIL,

      handleCreateToDoTask: ToDoTaskActions.CREATE_TO_DO_TASK,
      handleCreateToDoTaskOk: ToDoTaskActions.CREATE_TO_DO_TASK_OK,
      handleCreateToDoTaskFail: ToDoTaskActions.CREATE_TO_DO_TASK_FAIL

    });

    this.registerAsync(ToDoListSource);
  
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

  handleGetToDoTasks(param) { this.getInstance().getToDoTasks(); }
  handleGetToDoTasksOk(response) {
    this.tasks = response.data.to_do_tasks;
  }
  handleGetToDoTasksFail(error) { console.log(error); }

}

export default alt.createStore(ToDoTasksStore, 'ToDoTasksStore');
