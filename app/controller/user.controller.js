// Creation CRUD
const db = require('../config/db.config.js');
const User = db.users;

// Post a User
exports.create = (req, res) => {
    // Save to MySQL database
    User.create({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address,
        street: req.body.street,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
        gender: req.body.gender,
        phone: req.body.phone,
        social_num: req.body.social_num,
        level: req.body.level,
        bio: req.body.bio,
        social_network: req.body.social_network
    }).then(users => {
        // Send created User to client
        res.render('account.ejs',{
            users:users
        });
    });
};

// Liste des utilisateurs
exports.findAll = (req, res) => {
    User.findAll({}).then(users => {
        // Administrateur
        res.render('index.ejs',{
            users : users
        });
    });
};

// Recherche d'un utilisateur par identifiant
exports.findById = (req, res) => {
    User.findOne({ where: {id: req.params.userId} }).then(users => {
        res.render('account.ejs', {
            user_account : users
        });
    })
};

// Mis à jour des informations utilisateur
exports.update = (req, res) => {
    const id = req.params.userId;
    User.update({ 
        email: req.body.email,
        password: req.body.password,
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

// Suppression d'un utilisateur par identifiant
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a User with id = ' + id);
    });
};