const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utilities/AppError');
const errorController = require('./controller/errorController');
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const commentRouter = require('./routes/commentRoute');
const viewRouter = require('./routes/viewRoute');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//middlewires
//serving static files
app.use(express.static(`${__dirname}/public`));
//security http headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//limit requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests, please try again in an hour',
});
app.use('/api', limiter);
//body parser body->req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

//data sanitization
//nosql query injection
app.use(mongoSanitize());
//XSS
app.use(xss());
//parameter pollution
app.use(
  hpp({
    whitelist: ['duration', 'ratingAverage', 'views', 'videoQuality'],
  })
);

//routes

app.use('/', viewRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`cannot find ${req.originalUrl} on the server`, 404));
});

app.use(errorController);

module.exports = app;
