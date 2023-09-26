const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("app-front/public"));
app.set("trust proxy", true);

/*
if (process.env.NODE_ENV === "production") {
  pool.connection.socketPath = "aliftechtest:us-central1:deliveryapp";
} else {
  pool.connection.host = "localhost";
}*/

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "fkjgnfjgn"] });
});

app.get("/shops", (req, res) => {
  pool.query(`select * from Shops`, (err, result, fields) => {
    if (err) {
      console.log("error:", err);
      res.status(500).json({ error: "Database error" });
      return;
    }
    res.json({ shops: result });
  });
});

let shopSelected = 0;
app.post("/shopId", (req, res) => {
  const shopId = req.body;
  res.send("ok");
  shopSelected = shopId;
  try {
    pool.query("SELECT * FROM products WHERE shop_id = ?", [shopId.id]);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log("shopSelected", shopSelected);
});

app.get("/products", (req, res) => {
  pool.query(
    `select * from Products where shop_id=?`,
    [shopSelected.id],
    (err, result, fields) => {
      if (err) {
        console.log("error:", err);
        res.status(500).json({ error: "Database error" });
        return;
      }
      res.json({ products: result });
    }
  );
});

app.post("/addorder", (req, res) => {
  const order = req.body;
  pool.query(
    `INSERT INTO Orders (name, phone, address, orderProducts, totalPrice, paymentMethod, deliveryMethod, date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
    [
      order.name,
      order.phone,
      order.address,
      order.orderProducts,
      order.totalPrice,
      order.deliveryMethod,
      order.paymentMethod,
      Date.now(),
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting order:", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Order inserted successfully");
        res.send("ok");
      }
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
