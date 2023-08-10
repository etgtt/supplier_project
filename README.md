# supplier_project

**Product and Supplier Search Program Report**

This report provides an overview of the product and supplier search program developed using Node.js, Express.js, and Sequelize to interact with a MySQL database. The program allows users to search for products and obtain information about the most suitable suppliers.
**Program Structure:**

The program is structured into several files that perform specific functions:

1. **index.js:**
   - Express server setup.
   - Middleware configuration such as `body-parser`.
   - Connection to the MySQL database using the `connection` module from the `database/connection.js` file.
   - Route definition using the `route` module from the `routes/route.js` file.

2. **views/index.ejs:**
   - View file displaying a form for searching products.

3. **routes/route.js:**
   - Routing for different URLs.
   - Test route `/test`.
   - Route to list products and perform specific checks on them.
   - Route to add a purchase.

4. **models/Client.js:**
   - Definition of the `Client` model using Sequelize to interact with the `clients` table in the database.
   - Definition of model fields: `supplier`, `product`, `price`, `stock`, `discount`, `deadline`.

5. **database/connection.js:**
   - Configuration of the connection to the MySQL database using Sequelize.

**Program Features:**

1. **Server and Database Connection:**
   - The program creates a local Express server listening on port 3000.
   - Establishes a connection to the MySQL database defined in the `database/connection.js` file.

2. **Home Page (`views/index.ejs`):**
   - Displays a form for searching products.
   - Users can input the product name and desired quantity.

3. **Routing (`routes/route.js`):**
   - Contains routes to test the server, list products, and add purchases.
   - The `/test` route returns a test message.
   - The `/list` route lists products and performs specific checks on them.
   - The `/purchase` route allows the addition of a purchase to the database.

4. **Data Model (`models/Client.js`):**
   - Defines the `Client` model with fields corresponding to the `clients` table.
   - Defines fields: `supplier`, `product`, `price`, `stock`, `discount`, `deadline`.

5. **Database Connection (`database/connection.js`):**
   - Configures the connection to the MySQL database using Sequelize.
  

**Usage:**

1. Run the program by executing the `index.js` file in Node.js.
2. Access the program's home page through a web browser or HTTP request tool.
3. Fill out the form to search for products and suppliers.
4. Use the `/test` and `/list` routes to test the server and list products.

**Notes:**

- Ensure that the MySQL database is running and the connection information in the `database/connection.js` file is correct.
- The program lacks advanced authentication or security measures and is intended for learning and demonstration purposes only.

- **Conclusion:**

- This product and supplier search program is a simple demonstration of using Node.js, Express.js, and Sequelize to interact with a MySQL database.
- It enables product searching, listing, and purchase addition, showcasing fundamental concepts of routing, data modeling, and database connection in a web application.
















     
  
     
