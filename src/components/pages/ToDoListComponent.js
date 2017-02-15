'use strict';

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import List from './../toDo/ListComponent';

require('styles/pages/ToDoList.css');

class ToDoListComponent extends React.Component {
  render() {
    return (
      <div className="todolist-component">
        <Grid>
          <Row>
            <Col xs={12}>
              <List />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ToDoListComponent.displayName = 'PagesToDoListComponent';

// Uncomment properties you need
// ToDoListComponent.propTypes = {};
// ToDoListComponent.defaultProps = {};

export default ToDoListComponent;
