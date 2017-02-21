'use strict';

import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ToDoTasksStore from './../../stores/ToDoTasksStore';
import ToDoTasksActions from './../../actions/ToDoTasksActions';
import AltContainer from 'alt-container';

import ListAlt from './../toDo/ListAltComponent';
import TaskForm from './../toDo/TaskFormComponent';

require('styles/pages/ToDoListAlt.css');

class ToDoListAltComponent extends React.Component {
  
  /* Lifecycle */
  
  /*
  constructor(props) {
    super(props);
    this.state = ToDoTasksStore.getState();
  }
  */

  componentDidMount() {
    // ToDoTasksStore.listen(this.onToDoTasksStoreChange);

    /* Load all Tasks */
    ToDoTasksActions.getToDoTasks();
  }

  /*
  componentWillUnmount() {
    ToDoTasksStore.unlisten(this.onToDoTasksStoreChange);
  }
  */

  /* Handlers */
  /*
  onToDoTasksStoreChange = (state) => {
    this.setState(state);
  }
  */

  render() {
    return (
      <div className="todolistalt-component">
        <Grid>
          <Row>
            <h1>Altjs ToDoList!!!</h1>
            {/*<h2>There are {this.state.tasks.length} in array!</h2>*/}  
          </Row>
          <Row>
            <Col xs={12}>
              {/*<TaskForm onTaskAdd={} />*/}
              <AltContainer 
                actions={function (props) {
                  return {
                    onTaskAdd: function (taskBody) {
                      return ToDoTasksActions.createToDoTask({body: taskBody});
                    }
                  }
                }}>
                  <TaskForm />
                </AltContainer>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {/*<Button onClick={ToDoTasksActions.getToDoTasks}>Load Tasks</Button>*/}
              {/*<ListAlt toDoTasks={this.state.tasks} />*/}
              <AltContainer stores={
                {
                  toDoTasks: function (props) {
                    return {
                      store: ToDoTasksStore,
                      value: ToDoTasksStore.getState().tasks
                    };
                  }
                }
              }>
                <ListAlt />
              </AltContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ToDoListAltComponent.displayName = 'PagesToDoListAltComponent';

// Uncomment properties you need
// ToDoListAltComponent.propTypes = {};
// ToDoListAltComponent.defaultProps = {};

export default ToDoListAltComponent;
