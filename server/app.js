const express = require('express');
const indexRouter = require('./src/routes/index');
const sequelize = require('./src/database/db');
const app = express();
const cors = require('cors');
const morgan = require('morgan')
require('dotenv').config();

const PORT = process.env.PORT


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// Routes in use
app.use("/api", indexRouter);

// Run server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
//Use conect to database and validate conection
  sequelize.sync({ force: false }).then(() => {
    console.log("conect to database is correct")
  }).catch((err) => {
    console.log("error", err);
  })
});