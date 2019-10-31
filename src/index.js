const express = require('express');
const MongoLib = require('./lib/mongo');
const app = express();

const { config } = require('./config');
const platziStore = require('./routes/');

app.use(express.json());

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

platziStore(app);

app.listen(config.port, async (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  const connect = new MongoLib();
  await connect.connect();
  console.log(`Listening http://localhost:${config.port}`);
});