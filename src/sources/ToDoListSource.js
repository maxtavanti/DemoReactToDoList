import axios from 'axios';
import apiMock from './mocks/apiMock';

import ToDoTasksActions from './../actions/ToDoTasksActions';

const ToDoListSource = {
  getToDoTasks: {
    remote(state) {
      return axios.get('/to_do_tasks');
    },
    success: ToDoTasksActions.getToDoTasksOk,
    error: ToDoTasksActions.getToDoTasksFail
  },
  createToDoTask: {
    remote(state, taskObj) {
      return axios.post('/to_do_tasks', taskObj);
    },
    success: ToDoTasksActions.createToDoTaskOk,
    error: ToDoTasksActions.createToDoTaskFail
  }
};

export default ToDoListSource;
