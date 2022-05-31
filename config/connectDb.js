const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`mongodb+srv://hewali:hewali123@cluster0.gmyik.mongodb.net/timeTable`)
    .then(() => console.log('Database is connected.'))
    .catch((err) => console.log(err))
};

module.exports = connect;