/*
Setting up the routes

Routing refers to determining how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, PUT,PATCH,DELETE)

Each of our routes has different route handler functions, which are executed when the route is matched.

Below we have defined two basic routes

    /tasks
    /tasks/taskId
    with different methods
    ‘/tasks’ has to methods(‘GET’ and ‘POST’), while ‘/tasks/taskId’ has GET, PUT and DELETE.

As you can see, we required the controller so each of the routes methods can call it’s respective handler function.
To do this, open the appRoutes.js file in the route folder and paste the code snippet below into
*/

'use strict';
module.exports = function (app) {
    // var todoList = require('../controllers/todoListController');
    var todoList = require('../controller/appController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};


