const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const api = process.env.API_URL;

//! MIDDLEWARES
app.use(express.json());

//! ROUTES
const vansRouter = require("./Routes/Vans");
app.use(`${api}/vans`, vansRouter);
app.use(`${api}/vans/:id`, vansRouter);

const hostRouter = require('./Routes/Host')
app.use(`${api}/host/vans`, hostRouter);

const userRouter = require("./Routes/User")
app.use(`${api}/signin`, userRouter)

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log("Error Connecting To Database");
  });

app.listen(3000, () => {
  console.log("Server Is Running At http://localhost:3000");
});
