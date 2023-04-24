const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();

const User = require('./models/User');
const Annonce = require('./models/Annonce');
const Reservation = require('./models/Reservation');
const Review = require('./models/Review');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

/* ----- FAKER ----- */

// empty all collections except users
const emptyCollections = async () => {
    await Annonce.deleteMany({});
    await Reservation.deleteMany({});
    await Review.deleteMany({});
}

// create users
const createUsers = async () => {
    const users = [];
    for (let i = 0; i < 15; i++) {
        const user = new User({
            email: faker.internet.email(),
            password: bcrypt.hashSync(faker.internet.password(), 10),
            username: faker.internet.userName(),
        });
        users.push(user);
    }
    await User.insertMany(users);
}



// run
const run = async () => {
    await emptyCollections();
    await createUsers();
    db.close();
}

run();