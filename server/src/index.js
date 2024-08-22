const express = require("express");
const cors = require("cors"); // Import the cors package
const { PORT } = require("./config/configProperty.js");
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subCategoryRoutes.js');
const productRoutes = require('./routes/productRoutes');
const sequelize = require("./config/database.js");

function createServerConfiguration() {
  // Create the object of express
  const app = express();

  // Enable CORS
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
    )
  );
  

  // Middleware for parsing JSON and URL-encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Define routes
  app.use("/api/categories", categoryRoutes);
  app.use("/api/subcategories", subcategoryRoutes);
  app.use("/api/products", productRoutes);

  // Start the server and sync with the database
  app.listen(PORT, async () => {
    await sequelize.sync();
    console.log("Server is running on port " + PORT);
  });
}

createServerConfiguration();
