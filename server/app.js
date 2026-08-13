const express = require("express");
const mysql2 = require("mysql2/promise");

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let connection;
async function connections() {
  try {
    connection = await mysql2.createConnection({
      host: "localhost",
      user: "myDBuser",
      password: "123",
      database: "mydb",
    });
    console.log("connected succuss");
  } catch (error) {
    console.log("error on connection", error);
  }
}
connections();

app.get("/install", (req, res) => {
  async function tables() {
    try {
      let productsTable = `
    CREATE TABLE IF NOT EXISTS ProductsTable (
    Product_id int auto_increment,
    product_url VARCHAR(255)  not null,
    product_name VARCHAR(255)  not null,
    PRIMARY KEY (Product_id)
    )
  `;

      let ProductDescriptionTable = `CREATE TABLE IF NOT EXISTS ProductDescriptionTable (
Description_id int auto_increment,
Product_id int not null,
Product_brief_description VARCHAR(255)  not null,
Product_description VARCHAR(2048)  not null,
Product_img VARCHAR(255)  not null,
Product_link VARCHAR(255)  not null,
 PRIMARY KEY (Description_id),
 FOREIGN  KEY (Product_id) REFERENCES ProductsTable (Product_id)

) `;

      let ProductPriceTable = `CREATE TABLE IF NOT EXISTS ProductPriceTable (
Price_id int auto_increment,
Product_id int not null,
Starting_price VARCHAR(255)  not null,
Price_range VARCHAR(2048)  not null,
 PRIMARY KEY (Price_id),
 FOREIGN  KEY (Product_id) REFERENCES ProductsTable (Product_id)

) `;

      let UserTable = `
    CREATE TABLE IF NOT EXISTS UserTable (
    user_id int auto_increment,
    User_name VARCHAR(255)  not null,
    User_password VARCHAR(255)  not null,
    PRIMARY KEY (user_id)
    )
  `;

      let OrdersTable = `CREATE TABLE IF NOT EXISTS OrdersTable (
order_id int auto_increment,
Product_id int not null,
user_id int not null,
 PRIMARY KEY (order_id),
 FOREIGN  KEY (Product_id) REFERENCES ProductsTable (Product_id),
  FOREIGN  KEY (user_id) REFERENCES UserTable (user_id)
) `;

      await connection.query(productsTable);
      console.log("productsTable table created");

      await connection.query(ProductDescriptionTable);
      console.log("ProductDescriptionTable table created");

      await connection.query(ProductPriceTable);
      console.log("ProductPriceTable table created");

      await connection.query(UserTable);
      console.log("UserTable table created");

      await connection.query(OrdersTable);
      console.log("OrdersTable table created");
    } catch (error) {
      console.log("error on table creating ", error);
    } finally {
      await connection.end();
    }
  }
  tables();
});

app.get("/iphones", (req, res) => {
  async function selectAll() {
    try {
      let [rows] = await connection.query(
        "SELECT * FROM productsTable JOIN ProductDescriptionTable JOIN ProductPriceTable ON productsTable.product_id = ProductDescriptionTable.product_id AND  productsTable.product_id =  ProductPriceTable.product_id",
      );

      let iphones = { products: [] };
      iphones.products = rows;
      let stringIphones = JSON.stringify(iphones);
      res.end(stringIphones);
    } catch (error) {
      console.log("error on selecting  ", error);
    } finally {
      if (connection) {
        await connection.end();
        console.log("Connection closed cleanly.");
      }
    }
  }
  selectAll();
});

app.post("/add-product", (req, res) => {
  const {
    product_name,
    product_url,
    Product_brief_description,
    Product_img,
    Product_link,
    Starting_price,
    Price_range,
    Product_description,
  } = req.body;
  async function inserting() {
    try {
      let productName =
        "INSERT INTO ProductsTable (product_name, product_url) VALUES (?, ?)";
      const [ProductsTableResult] = await connection.query(productName, [
        product_name,
        product_url,
      ]);

      console.log("product_name inserted");
      let Product_id = ProductsTableResult.insertId;

      let ProductDescriptionTable =
        "INSERT INTO ProductDescriptionTable (Product_brief_description, Product_description,Product_img,Product_link,Product_id) VALUES (?, ?,?,?,?)";

      await connection.query(ProductDescriptionTable, [
        Product_brief_description,
        Product_description,
        Product_img,
        Product_link,
        Product_id,
      ]);

      console.log("ProductDescriptionTable inserted");
      let ProductPriceTable =
        "INSERT INTO ProductPriceTable (Starting_price, Price_range,Product_id) VALUES (?, ?,?)";
      await connection.query(ProductPriceTable, [
        Starting_price,
        Price_range,
        Product_id,
      ]);

      console.log("ProductPrice inserted");
    } catch (error) {
      console.log("error on inserting ", error);
    } finally {
      if (connection) {
        await connection.end();
        console.log("Connection closed cleanly.");
      }
    }
  }
  inserting();
});

app.listen(2026, () => {
  console.log("server is running at port 2026");
});
