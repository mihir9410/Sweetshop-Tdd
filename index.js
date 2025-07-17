const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const SweetShop = require("./src/SweetShop");

const app = express();
const PORT = 3000;

// -------------------
// Middleware Setup
// -------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // for serving static assets
app.set("view engine", "ejs");      // set EJS as templating engine

// -------------------
// Route: Home Page
// -------------------
app.get('/', (req, res) => {
  let sweets = [];
  let error = null;
  const successMessage = req.query.success || null;

  try {
    sweets = SweetShop.getAllSweets(); // fetch all sweets from SweetShop
  } catch (err) {
    error = err.message;
  }

  res.render('index', { sweets, error, successMessage });
});

// -------------------
// Route: Add New Sweet
// -------------------
app.post("/add", (req, res) => {
  try {
    const sweet = {
      id: parseInt(req.body.id),
      sweet_name: req.body.name,
      sweet_category: req.body.category,
      sweet_price: parseFloat(req.body.price),
      sweet_quantity: parseInt(req.body.quantity),
    };

    SweetShop.addSweet(sweet);
  } catch (err) {
    // Show error via alert and redirect back
    return res.send(
      `<script>alert("${err.message}"); window.location.href="/";</script>`
    );
  }

  res.redirect("/");
});

// -------------------
// Route: Purchase Sweet
// -------------------
app.post('/purchase', (req, res) => {
  try {
    const result = SweetShop.purchaseSweet(
      parseInt(req.body.id),
      parseInt(req.body.quantity)
    );

    // Redirect to home with success message in query params
    const query = new URLSearchParams({
      success: `Purchased ${result.quantity_purchased} ${result.sweet_name}(s) for ₹${result.total_price}`
    }).toString();

    return res.redirect('/?' + query);
  } catch (err) {
    // Show error via alert and redirect back
    return res.send(
      `<script>alert("${err.message}"); window.location.href="/";</script>`
    );
  }
});

// -------------------
// Route: Delete Sweet
// -------------------
app.post('/delete', (req, res) => {
  try {
    SweetShop.deleteSweet(parseInt(req.body.id));
  } catch (err) {
    // Show error via alert and redirect back
    return res.send(
      `<script>alert("${err.message}"); window.location.href="/";</script>`
    );
  }

  res.redirect('/');
});

// -------------------
// Start Server
// -------------------
app.listen(PORT, () => {
  console.log(`SweetShop server running at http://localhost:${PORT}`);
});
