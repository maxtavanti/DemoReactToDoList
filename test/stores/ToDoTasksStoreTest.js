/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import alt from 'components/Dispatcher';
import { ToDoTasksStore } from 'stores//ToDoTasksStore';
import AltTestingUtils from 'alt-utils/lib/AltTestingUtils';

describe('ToDoTasksStore', () => {

  let storeClass;

  // Instanciate a new store for every test
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, ToDoTasksStore);
  });
});
