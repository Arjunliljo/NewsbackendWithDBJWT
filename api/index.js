require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const articleRoutes = require("../routes/articleRoutes");
const authorRoutes = require("../routes/authorRoutes");
const userRoutes = require("../routes/userRoutes");
const authRoutes = require("../routes/authRoutes");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", articleRoutes);
app.use("/articles", articleRoutes);
app.use("/authors", authorRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.CONNECTION_STR);
}
