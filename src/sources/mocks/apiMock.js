import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios, { delayResponse: 500 });

let baseUrl = 'http://localhost:8000';

let to_do_tasks = [
    { id: 1, body: 'Body Task 001', done: true },
    { id: 2, body: 'Body Task 002', done: false },
    { id: 3, body: 'Body Task 003', done: true },
    { id: 4, body: 'Body Task 004', done: false },
    { id: 5, body: 'Body Task 005', done: false },
    { id: 6, body: 'Body Task 006', done: false },
    { id: 7, body: 'Body Task 007', done: false },
    { id: 8, body: 'Body Task 008', done: false }
  ];

mock.onGet(`/to_do_tasks`).reply(200, {
  to_do_tasks: to_do_tasks
});

mock.onPost(`/to_do_tasks`).reply((config) => {
  //console.log(config);

  let data = JSON.parse(config.data);

  let newTask = {
    id: to_do_tasks.length + 1,
    body: data.body,
    done: false
  }

  to_do_tasks.push(newTask);

  return [201, newTask];
});

module.exports = mock;