// Creation CRUD
const db = require('../config/db.config.js');
const User = db.users;
const bcrypt = require('bcrypt');

// Post a User
exports.create = (req, res) => {
    var matched_users_promise = User.findAll({
        where: (
            { email: req.body.email }
        )
    });
    matched_users_promise.then(function (users) {
        if (users.length == 0) {
            const passwordHash = bcrypt.hashSync(req.body.password, 10);
            User.create({
                email: req.body.email,
                password: passwordHash,
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
            }).then(function () {
                let newSession = req.session;
                newSession.email = req.body.email;
                res.redirect('/');
            });
        }
        else {
            res.render('account', { errors: "Votre identifiant ou email existent déjà" });
        }
    });
};

// Liste des utilisateurs
exports.findAll = (req, res) => {
    User.findAll({}).then(users => {
        // Administrateur
        res.render('index.ejs', {
            users: users,
            title: "sdff"
        });
    });
};

// Recherche d'un utilisateur par identifiant
exports.findById = (req, res) => {
    User.findOne({ where: { id: req.params.userId } }).then(users => {
        res.render('account.ejs', {
            users: users,
            title: ""
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