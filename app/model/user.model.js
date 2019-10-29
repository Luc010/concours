module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        street: {
            type: Sequelize.STRING
        },
        streetNum: {
            type: Sequelize.STRING
        },
        zipCode: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        socialNum: {
            type: Sequelize.INTEGER
        },
        levelStudy: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.STRING
        },
        socialNetwork: {
            type: Sequelize.STRING
        }
    });
    return User;
};