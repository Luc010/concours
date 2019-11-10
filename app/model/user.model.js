// Declaration utilisateur
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING(255)
        },
        password: {
            type: Sequelize.STRING(255)
        },
        firstname: {
            type: Sequelize.STRING(255)
        },
        lastname: {
            type: Sequelize.STRING(255)
        },
        age: {
            type: Sequelize.INTEGER(255)
        },
        address: {
            type: Sequelize.STRING(255)
        },
        street: {
            type: Sequelize.STRING(255)
        },
        zip: {
            type: Sequelize.STRING(255)
        },
        city: {
            type: Sequelize.STRING(255)
        },
        country: {
            type: Sequelize.STRING(255)
        },
        gender: {
            type: Sequelize.STRING(255)
        },
        phone: {
            type: Sequelize.INTEGER(255)
        },
        social_num: {
            type: Sequelize.INTEGER(255)
        },
        level: {
            type: Sequelize.STRING(255)
        },
        bio: {
            type: Sequelize.STRING(255)
        },
        social_network: {
            type: Sequelize.STRING(255)
        }
    });
    return User;
};