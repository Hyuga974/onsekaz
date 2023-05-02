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
    console.log(`Purging collections...`);
    await Annonce.deleteMany({});
    await Reservation.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({ email: { $ne: 'vazzmdr@gmail.com' } });
}

// create users
const createUsers = async () => {
    console.log(`Creating users...`);
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

// create annonces
const createAnnonces = async () => {
    console.log(`Creating annonces...`);
    const annonces = [];
    const users = await User.find();
    for (let i = 0; i < 15; i++) {
        const annonce = new Annonce({
            // link to user
            user: users[i]._id,
            // annonce data
            title: faker.lorem.sentence(),
            location: faker.address.city(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            price: faker.finance.amount(),
            rooms_nb: faker.datatype.number({ min: 1, max: 5 }),
            beds_nb: faker.datatype.number({ min: 1, max: 5 }),
            br_number: faker.datatype.number({ min: 1, max: 2 }),
            property: faker.helpers.arrayElement(['house', 'appartement', 'guest_house', 'hotel']),
            type: faker.helpers.arrayElement(['full_housing', 'private_room']),
            max_customer: faker.datatype.number({ min: 1, max: 10 }),
            description: faker.lorem.paragraph(),
            photos: [
                faker.image.imageUrl(),
                faker.image.imageUrl(),
                faker.image.imageUrl(),
                faker.image.imageUrl(),
            ],
        });
        annonces.push(annonce);
    }
    await Annonce.insertMany(annonces);
}



// run
const run = async () => {
    await emptyCollections();
    await createUsers();
    await createAnnonces();
    db.close();
}

run();