var cors = require("cors");
require("dotenv").config();
const express = require("express");

const app = express();

const connectToDb = require("./db/connectToDb");
const cookiesParser = require("cookie-parser");

const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

app.use(express.urlencoded({ extended: true }));

connectToDb();

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server Started at PORT ${process.env.PORT}`)
);
