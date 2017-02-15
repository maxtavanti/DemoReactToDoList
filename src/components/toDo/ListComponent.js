'use strict';

import React from 'react';
import axios from 'axios';

import apiMock from './../../sources/mocks/apiMock';

import {Table} from 'react-bootstrap';

import Task from './TaskComponent';
import TaskForm from './TaskFormComponent';

require('styles/toDo/List.css');

class ListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      to_do_tasks: [] 
    };

  }

  loadTasks = () => {
    let self = this;
    axios.get('/to_do_tasks')
      .then(function (response) {
        console.log(response);
        self.setState({
          to_do_tasks: response.data.to_do_tasks
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadTasks();
  }

  onTaskAdd = (taskBody) => {
    let self = this;
    axios.post('/to_do_tasks', {
        body: taskBody
      })
      .then(function (response) {
        console.log(response);
        self.loadTasks();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    let tasks = this.state.to_do_tasks.map((elem, index) => {
      return (
        <Task key={`task_row_${index}`} taskId={elem.id} taskBody={elem.body} taskDone={elem.done} />
      );
    });

    return (
      <div className="list-component">

        <TaskForm onTaskAdd={this.onTaskAdd} />

        <br/>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Done</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks}
          </tbody>
        </Table>
      </div>
    );
  }
}

ListComponent.displayName = 'ToDoListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
