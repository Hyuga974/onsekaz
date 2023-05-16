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

let rentalTitles = [
    "Spacieuse villa de 4 chambres à Fort-de-France",
    "Location saisonnière : bungalow en bord de mer à Saint-Denis, La Réunion",
    "Demeure de charme avec piscine à Basse-Terre, Guadeloupe",
    "Location longue durée : maison familiale à Nouméa, Nouvelle-Calédonie",
    "Maisonnette pittoresque au coeur de Saint-Pierre, La Réunion",
    "Belle demeure coloniale à Papeete, Tahiti",
    "Location saisonnière : appartement vue mer à Pointe-à-Pitre",
    "Villa de luxe avec piscine à Saint-Barthélemy",
    "Maison traditionnelle créole à Saint-Paul, La Réunion",
    "Appartement T2 à louer à Cayenne, Guyane",
    "Location vacances : chalet en montagne à Cilaos, La Réunion",
    "Maison avec jardin tropical à Sainte-Anne, Guadeloupe",
    "Villa haut standing avec vue imprenable à Saint-Martin",
    "Location longue durée : appartement T3 à Mamoudzou, Mayotte",
    "Belle maison de campagne à louer à La Trinité, Martinique",
    "Maison en bord de plage à Sainte-Marie, La Réunion",
    "Location saisonnière : villa avec jacuzzi à Saint-François, Guadeloupe",
    "Demeure de charme en centre-ville de Saint-Joseph, La Réunion",
    "Location vacances : maisonnette avec vue sur la mer à Les Trois-Îlets, Martinique",
    "Maison de ville moderne à Le Moule, Guadeloupe",
    "Location longue durée : appartement spacieux à Dzaoudzi, Mayotte",
    "Villa de luxe en bord de mer à Saint-Pierre-et-Miquelon",
    "Appartement de charme au centre de Saint-Louis, La Réunion",
    "Maison avec terrasse et vue mer à Saint-Leu, La Réunion",
    "Location saisonnière : bungalow tropical à Sainte-Rose, Guadeloupe"
  ];
  

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
    for (let i = 0; i < 50; i++) {
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
    for (let i = 0; i < 50; i++) {
        const annonce = new Annonce({
            // link to user
            user: users[i]._id,
            // annonce data
            title: faker.helpers.arrayElement(rentalTitles),
            location: faker.address.city(),
            latitude: faker.address.latitude(-20.7, -21.4),
            longitude: faker.address.longitude(55.85, 55.15),
            price: faker.finance.amount(),
            rooms_nb: faker.datatype.number({ min: 1, max: 5 }),
            beds_nb: faker.datatype.number({ min: 1, max: 5 }),
            br_number: faker.datatype.number({ min: 1, max: 2 }),
            property: faker.helpers.arrayElement(['house', 'appartement', 'guest_house', 'hotel']),
            type: faker.helpers.arrayElement(['full_housing', 'private_room']),
            max_customer: faker.datatype.number({ min: 1, max: 10 }),
            description: faker.lorem.paragraph(),
            photos: [
                `./src/assets/photos/${faker.datatype.number({ min: 1, max: 14 })}.jpg`,
                `./src/assets/photos/${faker.datatype.number({ min: 1, max: 14 })}.jpg`,
                `./src/assets/photos/${faker.datatype.number({ min: 1, max: 14 })}.jpg`,
                `./src/assets/photos/${faker.datatype.number({ min: 1, max: 14 })}.jpg`,
                `./src/assets/photos/${faker.datatype.number({ min: 1, max: 14 })}.jpg`
            ],
        });
        annonces.push(annonce);
    }
    await Annonce.insertMany(annonces);
}

// create reservations
const createReservations = async () => {
    console.log(`Creating reservations...`);
    const reservations = [];
    const users = await User.find();
    const annonces = await Annonce.find();
    for (let i = 0; i < 50; i++) {
        const reservation = new Reservation({
            // link to user
            user: users[i]._id,
            // link to annonce
            annonce: annonces[i]._id,
            // reservation data
            start_date: faker.date.between('2021-01-01', '2021-12-31'),
            end_date: faker.date.between('2021-01-01', '2021-12-31'),
            customer_nb: faker.datatype.number({ min: 1, max: 10 }),
        });
        reservations.push(reservation);
    }
    await Reservation.insertMany(reservations);
}

// create reviews
const createReviews = async () => {
    console.log(`Creating reviews...`);
    const reviews = [];
    const users = await User.aggregate([
        { $sample: { size: 50 } }
     ])
    const annonces = await Annonce.find();
    for (let i = 0; i < 50; i++) {
        const review = new Review({
            // link to user
            user: users[i]._id,
            annonce: annonces[i]._id,
            score: faker.datatype.number({ min: 1, max: 5 }),
            content: faker.lorem.paragraph()
        });
        reviews.push(review);
    }
    await Review.insertMany(reviews);
}


// run
const run = async () => {
    await emptyCollections();
    await createUsers();
    await createAnnonces();
    await createReservations();
    await createReviews();
    db.close();
}

run();