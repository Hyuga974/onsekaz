const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./config/database.config');
const authCheckMiddleware = require('./middleware/authentication.check');


const indexRouter = require('./routes/index');
const authentificationRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authentificationRouter);

//protected routes
app.use('/profile', authCheckMiddleware, userRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});

module.exports = app;
