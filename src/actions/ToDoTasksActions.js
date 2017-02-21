import alt from 'components/Dispatcher';

class ToDoTasksActions {

    loadTasks() { return true; }

    /* get Tasks from api */
    getToDoTasks() { return true; }
    getToDoTasksOk(successObj) { return successObj; }
    getToDoTasksFail(errorObj) { return errorObj; }

    createToDoTask(taskObj) { return taskObj; }
    createToDoTaskOk(successObj) { return successObj; }
    createToDoTaskFail(errorObj) { return errorObj; }

}

export default alt.createActions(ToDoTasksActions);
