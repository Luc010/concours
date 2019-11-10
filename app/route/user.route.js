module.exports = function(app) {
    const users = require('../controller/user.controller.js');
    
    // Create a new user
    app.post('/users', users.create);

    // Retrieve all user
    app.get('/', users.findAll);
 
    // Retrieve a single user by Id
    app.get('/account/:userId', users.findById);
 
    // Update a user with Id
    app.put('/users/:userId', users.update);
 
    // Delete a user with Id
    app.delete('/users/:userId', users.delete);
};