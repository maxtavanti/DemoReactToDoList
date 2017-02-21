'use strict';

import React from 'react';
import {Table} from 'react-bootstrap';

import Task from './TaskComponent';

require('styles/toDo/ListAlt.css');

class ListAltComponent extends React.Component {
  render() {

    let tasks = this.props.toDoTasks.map((elem, index) => {
      return (
        <Task key={`task_row_${index}`} taskId={elem.id} taskBody={elem.body} taskDone={elem.done} />
      );
    });

    return (
      <div className="listalt-component">
        {/*<TaskForm onTaskAdd={this.onTaskAdd} />*/}

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

ListAltComponent.displayName = 'ToDoListAltComponent';

// Uncomment properties you need
ListAltComponent.propTypes = {
  toDoTasks: React.PropTypes.array.isRequired
};
// ListAltComponent.defaultProps = {};

export default ListAltComponent;
