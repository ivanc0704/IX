const express = require("express");
const connectDB = require("./database/db")
const cors = require("cors");
require("dotenv").config();

connectDB();


const blogRoutes = require("./routes/blogs")

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json())

app.use("/api/blogs", blogRoutes);
app.use("/api/categories", blogRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
