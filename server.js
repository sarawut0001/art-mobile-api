const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

// controllers
const { UserController } = require("./controllers/UserController");
const { CompanyController } = require("./controllers/CompanyController");
const { ProductController } = require("./controllers/ProductController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// User
app.post("/api/user/signin", UserController.signIn);

// Company
app.post("/api/company/create", CompanyController.create);
app.get("/api/company/list", CompanyController.list);

// Buy
app.post("/api/buy/create", ProductController.create);
app.get("/api/buy/list", ProductController.list);
app.put("/api/buy/update/:id", ProductController.update);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
