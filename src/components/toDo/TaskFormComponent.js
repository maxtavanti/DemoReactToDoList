'use strict';

import React from 'react';
import {Glyphicon, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

require('styles/toDo/TaskForm.css');

class TaskFormComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      taskBody: ''
    }

  }

  changeTaskBody = (event) => {
    this.setState({
      taskBody: event.target.value
    });
  }

  addTask = (event) => {
    event.preventDefault();
    this.props.onTaskAdd(this.state.taskBody);
  }

  render() {
    return (
      <div className="taskform-component">
        <Form inline>
          <FormGroup controlId="taskBody">
            <ControlLabel>Task description</ControlLabel>
            {' '}
            <FormControl type="text" 
                         placeholder="Call Max..." 
                         value={this.state.taskBody} 
                         onChange={this.changeTaskBody} />
          </FormGroup>
          {' '}
          <Button type="submit" onClick={this.addTask}>
            <Glyphicon glyph="plus" />
          </Button>
        </Form>
      </div>
    );
  }
}

TaskFormComponent.displayName = 'ToDoTaskFormComponent';

// Uncomment properties you need
TaskFormComponent.propTypes = {
  onTaskAdd: React.PropTypes.func.isRequired
};
// TaskFormComponent.defaultProps = {};

export default TaskFormComponent;
