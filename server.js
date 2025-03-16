const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

// controllers
const { UserController } = require("./controllers/UserController");
const { CompanyController } = require("./controllers/CompanyController");
const { ProductController } = require("./controllers/ProductController");
const { SellController } = require("./controllers/SellController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// User
app.post("/api/user/signin", UserController.signIn);
app.get("/api/user/info", UserController.info);
app.put("/api/user/update", UserController.update);

// Company
app.post("/api/company/create", CompanyController.create);
app.get("/api/company/list", CompanyController.list);

// Buy
app.post("/api/buy/create", ProductController.create);
app.get("/api/buy/list", ProductController.list);
app.put("/api/buy/update/:id", ProductController.update);
app.delete("/api/buy/remove/:id", ProductController.remove);

// Sell
app.post("/api/sell/create", SellController.create);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
