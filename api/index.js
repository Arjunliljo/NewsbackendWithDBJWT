require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const articleRoutes = require("../routes/articleRoutes");
const authorRoutes = require("../routes/authorRoutes");
const userRoutes = require("../routes/userRoutes");
const authRoutes = require("../routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/articles", articleRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res, next) => res.send("<h1>Page Not found</h1>"));

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(process.env.CONNECTION_STR);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
}

main();

// Export the handler function for Vercel
module.exports = (req, res) => {
  app(req, res);
};

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 3000;
// const articleRoutes = require("../routes/articleRoutes");
// const authorRoutes = require("../routes/authorRoutes");
// const userRoutes = require("../routes/userRoutes");
// const authRoutes = require("../routes/authRoutes");
// const cookieParser = require("cookie-parser");

// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/articles", articleRoutes);
// app.use("/api/authors", authorRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// app.use((req, res, next) => res.send("<h1>Page Not found</h1>"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// main()
//   .then(() => console.log("connected"))
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.CONNECTION_STR);
// }
