const mongoose = require('mongoose');
const dotenv = require('dotenv');
/*const connectivity = require('connectivity');

connectivity(function (online) {
  if (!online) {
    console.log('connected to the internet!');
  } else {
    console.error('sorry, not connected!');
  }
});*/

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('\n\n UNHANDLED EXCEPTION\n SHUTTING DOWN');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`running ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('\n\n UNHANDLED REJECTION\n SHUTTING DOWN');
  server.close(() => {
    process.exit(1);
  });
});
