### **Project Overview**

The Weighted Average Calculator is a web application designed to help users calculate the weighted average of a set of values and weights. This application is built using the Model-View-Controller (MVC) architecture and leverages technologies such as Node.js, Express, MySQL, and EJS. The application allows users to dynamically add and remove input fields, clear all inputs, and navigate through previous and next results stored in a MySQL database.

### **Requirements**

1. **Architecture**

- **Layered Architecture**: Ensure a logical separation of concerns between layers to maintain modularity and scalability.
- **Functional Services**: Divide the application into appropriate functional services tailored to the business problem.

2. **Back-End**

- **Environment**: Use Node.js for back-end development.
- **Framework**: Employ the Express.js framework to implement the MVC architecture.
- **Database**:
- Use an SQL database (e.g., MySQL) or a NoSQL alternative depending on the application's requirements.

3. **Front-End**

- **HTML5 and CSS**: Use semantic HTML elements and a clean, responsive layout.
- **Templates**: Utilize EJS or JADE/PUG templates for rendering views.
- **Optional Enhancements**: Incorporate libraries or frameworks such as Bootstrap and jQuery for improved styling and interactivity.

4. **Development Workflow**

- Clearly separate the responsibilities between the model (data), view (presentation), and controller (business logic).
- Create RESTful routes in the back-end to handle data exchange.

### Instructions to Run the Project

To run the project, please follow these steps:

1. **Navigate to the project directory**:
   `bash
cd <Dynamic-Website>
`
2. **Install the necessary dependencies**:

   ```bash
   npm install
   ```

3. **Configure the database**:

   -Ensure that MySQL is installed and running on your machine.
   -The application will automatically create the database and table if they do not exist when starting.

   -You can also run scirpt below to create databaase table:

   ```bash
   mysql -u [user] -p < database.sql
   ```

4. **Create .env file in main folder** <Dynamic-Website> with this template:

   ```bash
   DB_HOST=localhost
   DB_USER=[username example:"root"]
   DB_PASSWORD=[password]
   DB_NAME=averageDB
   ```

5. **Start the project using nmp:**:

   ```bash
   npm run dev
   ```

6. **Clear all records from the database**:

   ```bash
   node clearDatabase.js
   ```
