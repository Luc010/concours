
const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
    // Save to MySQL database
    User.create({
        email: req.body.email,
        password: passwordHash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address,
        street: req.body.street,
        streetNum: req.body.streetNum,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country,
        gender: req.body.gender,
        phone: req.body.phone,
        socialNum: req.body.socialNum,
        levelStudy: req.body.levelStudy,
        bio: req.body.bio,
        socialNetwork: req.body.socialNetwork
    }).then(users => {
        // Send created User to client
        res.send(users);
    });
};

// FETCH all Users
exports.findAll = (req, res) => {
    User.findAll({}).then(users => {
        // Send all Users to Client
        res.render('index.ejs',{
            users : users
        });
    });
};

// Find a User by Id
exports.findById = (req, res) => {
    User.findById(req.params.userId).then(users => {
        res.send(users);
    })
};

// Update a User
exports.update = (req, res) => {
    const id = req.params.userId;
    User.update({ 
        email: req.body.email,
        password: passwordHash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address,
        street: req.body.street,
        streetNum: req.body.streetNum,
        zipCode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country,
        gender: req.body.gender,
        phone: req.body.phone,
        socialNum: req.body.socialNum,
        levelStudy: req.body.levelStudy,
        bio: req.body.bio,
        socialNetwork: req.body.socialNetwork
    },
    { 
        where: { 
            id: req.params.userId 
        } 
    }).then(() => {
        res.status(200).send("updated successfully a User with id = " + id);
    });
};

// Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a User with id = ' + id);
    });
};