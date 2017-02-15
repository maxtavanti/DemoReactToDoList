'use strict';

import React from 'react';
import {Glyphicon} from 'react-bootstrap';

require('styles/toDo/Task.css');

class TaskComponent extends React.Component {
  render() {
    return (
      <tr className="task-component">
        <td>{this.props.taskId}</td>
        <td>{this.props.taskBody}</td>
        <td>{this.props.taskDone ? (<Glyphicon glyph="ok" />) : (<Glyphicon glyph="remove" />) }</td>
        <td></td>
      </tr>
    );
  }
}

TaskComponent.displayName = 'ToDoTaskComponent';

// Uncomment properties you need
TaskComponent.propTypes = {
  taskId: React.PropTypes.number.isRequired,
  taskBody: React.PropTypes.string.isRequired,
  taskDone: React.PropTypes.bool.isRequired,
  onDelete: React.PropTypes.func
};
// TaskComponent.defaultProps = {};

export default TaskComponent;
