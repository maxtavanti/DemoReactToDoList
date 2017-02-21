'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ToDoTasksStore from './../../stores/ToDoTasksStore';

require('styles/pages/ToDoListAlt.css');

class ToDoListAltComponent extends React.Component {
  
  /* Lifecycle */
  
  constructor(props) {
    super(props);
    this.state = ToDoTasksStore.getState();
  }

  componentDidMount() {
    ToDoTasksStore.listen(this.onToDoTasksStoreChange);
  }

  componentWillUnmount() {
    ToDoTasksStore.unlisten(this.onToDoTasksStoreChange);
  }

  /* Handlers */
  onToDoTasksStoreChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="todolistalt-component">
        <Grid>
          <Row>
            <Col xs={12}>
              Altjs ToDoList!!!
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
