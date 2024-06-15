const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
const articleRouts = require("./routes/articleRoutes");
const authorRouts = require("./routes/authorRoutes");

//LWYmoTlkFF7wqtGl - mongo db password

app.use(cors());
app.use(express.json());

app.use("/article", articleRouts);
app.use("/author", authorRouts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://arjun7180:<password>@cluster0.k2ag37a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
}
