const ecommerce =`
Creating a full-fledged e-commerce web application is a complex and extensive project. However, I can provide you with a basic template for an e-commerce website using React and offer some guidance to get you started. Please note that this is a simplified example, and a real-world e-commerce application would require more advanced features, security, and a backend system for handling transactions and managing products.

### Basic E-commerce Website Template in React:

jsx
import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products here
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>My E-commerce Store</h1>
        {/* Add navigation links, search bar, user profile, etc. */}
      </header>

      {/* Product Listing */}
      <section>
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Shopping Cart */}
      <section>
        <h2>Shopping Cart</h2>
        <div className="cart">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <h3>Total: {cart.reduce((total, item) => total + item.price, 0)}</h3>
          <button>Checkout</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} My E-commerce Store</p>
      </footer>
    </div>
  );
}

export default App;


### Guidance:

1. **Product Management**: In a real e-commerce application, 
you'd likely have a backend system to manage products. 
Products should be stored in a database, and you'd need 
API endpoints to retrieve product information dynamically.

2. **User Authentication**: Implement user registration, login, 
and authentication for secure transactions and user-specific data.

3. **Shopping Cart**: Enhance the shopping cart functionality to 
allow users to modify cart items, calculate totals, and process 
orders.

4. **Payment Processing**: Integrate a payment gateway to handle 
transactions securely.

5. **Product Details**: Create a product detail page with additional 
information about each product.

6. **Order History**: Implement a feature for users to view their 
order history.

7. **Responsive Design**: Ensure that your website is responsive 
to various screen sizes and devices.

8. **Security**: Implement security best practices to protect user 
data, especially payment information.

9. **Search and Filters**: Add search functionality and filters to 
help users find products easily.

10. **Reviews and Ratings**: Allow users to leave reviews and 
ratings for products.

11. **Backend Development**: Consider using Node.js, Django, 
Ruby on Rails, or another backend framework to handle business 
logic and database operations.

12. **Database**: Use a database system like MySQL, PostgreSQL, 
or MongoDB to store product and user data.

13. **Scalability**: Plan for scalability as your user base grows.

14. **Testing and Deployment**: Write unit tests for your 
application and deploy it to a web server or cloud platform.

Remember that building a production-ready e-commerce site is a 
significant endeavor. It's important to thoroughly plan your 
project, consider security, and potentially consult with experienced 
developers or teams to ensure success.
`;
const static =`
Creating a static web application involves building a website without server-side logic or dynamic content generation. Here's a step-by-step guide and a basic template to help you get started using HTML, CSS, and JavaScript. We'll use popular libraries and tools like Bootstrap and FontAwesome to simplify the process.

**1. Project Structure**

First, set up your project structure. Create a directory for your project and organize your files like this:

- project-folder/
  - index.html
  - css/
    - styles.css
  - js/
    - main.js
  - images/

**2. HTML Structure**

Create your HTML file (index.html) with a basic structure:

html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>Your Static Web App</title>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Content -->
    <main>
        <section>
            <h1>Welcome to Your Web App</h1>
            <p>This is a static web application template.</p>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        &copy; 2023 Your Static Web App
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>


**3. CSS Styles**

Create a CSS file (styles.css) to style your web application. You can use custom CSS or a CSS framework like Bootstrap.

css
/* styles.css */
/* Add your custom styles here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav li {
    display: inline;
    margin-right: 10px;
}

main {
    padding: 20px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}


**4. JavaScript (Optional)**

You can include JavaScript (main.js) to add interactivity to your site. For example, you might use it for form validation or handling user interactions.

**5. Assets**

Store your images and other assets in the images directory.

**6. Hosting**

To make your static web application accessible on the internet, you can use services like GitHub Pages, Netlify, or Vercel. Simply push your project to a repository on GitHub and configure your hosting service.

Remember that this is a basic template. You can expand it by adding more pages, content, and features according to your project's requirements. If you need more advanced functionality, consider using a static site generator like Gatsby or Jekyll.
`;


const Dynamic =`
Creating a dynamic web application involves more complexity 
and typically requires you to set up a development environment, 
use a front-end framework like React or Angular, and possibly 
a back-end framework like Node.js, Python Django, Ruby on Rails, 
or others, depending on your preferred technology stack. 
Below is a guide on how to set up a basic dynamic web application 
using React for the front end and Node.js for the back end.

**Front-End (React)**

1. **Set Up Your Development Environment:**
   - Install Node.js and npm (Node Package Manager) if you haven't already.

2. **Create a New React App:**
   - Open your terminal and run the following command to create a new React application:
     bash
     npx create-react-app your-app-name
     cd your-app-name
     

3. **Build the User Interface:**
   - Design your application's components, such as header, footer, navigation, and other dynamic elements using React components.
   - Use a state management library like Redux or React Context for managing global state if needed.
   
4. **Fetch Data:**
   - Use the fetch API or a library like Axios to retrieve data from your server or external APIs.
   
5. **Display Data Dynamically:**
   - Populate your components with dynamic data by rendering fetched data within your React components.

**Back-End (Node.js)**

1. **Set Up Your Development Environment:**
   - Install Node.js if you haven't already.

2. **Create a New Node.js App:**
   - Initialize a new Node.js project using npm:
     bash
     mkdir your-node-app
     cd your-node-app
     npm init -y
     

3. **Install Dependencies:**
   - Install necessary packages such as Express.js, a popular web application framework for Node.js:
     bash
     npm install express
     

4. **Build APIs:**
   - Create API routes in your Node.js application using Express. 
   For example, you can create routes to retrieve and send data.

5. **Database Integration:**
   - Integrate a database like MongoDB, PostgreSQL, 
   MySQL, or others for storing and managing data.
   - Use a library like Mongoose (for MongoDB) or Sequelize 
   (for SQL databases) for easy database interaction.

6. **Serve the Front-End:**
   - Serve your React application from the Node.js server 
   using a middleware like express.static.

**Connect Front-End and Back-End:**

1. Make API calls from your React components to the endpoints 
you created in your Node.js application.
2. Handle responses and update your UI with the data.

**Deployment:**

1. Deploy your front-end and back-end to a hosting provider or 
cloud platform. Popular options include Heroku, AWS, Netlify, 
and Vercel.

2. Ensure that your server and database are properly configured 
for production.

3. Update your React app's configuration to use the production 
server's URL.

4. Build and optimize your React app for production using npm run build.

5. Deploy both your front-end and back-end to the hosting provider.

Remember that creating a dynamic web application is a substantial 
project, and this guide provides a simplified overview. 
Depending on your project's complexity, you might need to 
use more libraries, set up authentication, and implement 
advanced features. Additionally, thorough testing and security 
considerations are crucial for a production-ready application.
`;

const defaults = `
Creating a complete JSX template for a normal website 
with a header, footer, navbar, carousel, cards, and more 
would require a substantial amount of code. However, 
I can provide you with a simplified example to get 
you started. You can expand and customize it further 
according to your needs.

Here's a basic template using React for your website:

import React from 'react';

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Your Website</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Carousel */}
      <div className="carousel">
        {/* Add your carousel content here */}
      </div>

      {/* Main Content */}
      <main>
        {/* Cards */}
        <div className="card">
          <h2>Card 1</h2>
          <p>Card content goes here.</p>
        </div>

        <div className="card">
          <h2>Card 2</h2>
          <p>Card content goes here.</p>
        </div>

        {/* Add more cards as needed */}
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </footer>
    </div>
  );
}

export default App;

In this example, you have a simple structure with a header, 
a navigation bar, a carousel (you'll need to replace the 
comment with your carousel component or code), a section 
for cards, and a footer.

Remember that this is a basic starting point. Depending on 
your project, you may want to use additional libraries and 
components for more advanced features. You'll also need to 
style your components with CSS or a UI framework like Bootstrap 
to make it visually appealing.

Please adjust and expand this template to fit your specific 
project requirements and design preferences.
`

const single = `
Creating a single-page web application (SPA) typically 
involves building a dynamic web application that loads 
and updates content without requiring a full page reload. 
SPAs are commonly built using JavaScript frameworks like React, 
Angular, or Vue. I'll provide a simple template for a SPA using 
React as an example and some guidance to get you started.

First, make sure you have Node.js and npm (Node Package Manager) 
installed on your system.

Here's a step-by-step guide to creating a basic React SPA:

**Step 1: Create a React App**

You can use Create React App to quickly set up a React project. 
Open your terminal and run:

bash
npx create-react-app my-spa


Replace my-spa with your desired project name.

**Step 2: Project Structure**

Once your project is created, your project structure will look something like this:


my-spa/
  src/
    App.js
    index.js
  public/
    index.html
  package.json


- src/App.js: This is the main component where you'll build your SPA.
- public/index.html: The HTML template for your SPA.
- index.js: Entry point for your React app.

**Step 3: Build Your SPA**

Now, you can build your single-page application within src/App.js 
and its child components. For example:

jsx
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>My SPA</h1>
      </header>

      <main>
        {/* Your SPA content goes here */}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My SPA</p>
      </footer>
    </div>
  );
}

export default App;


You can create additional components and use React Router for navigation to different views or pages within your SPA.

**Step 4: Run Your SPA**

In the terminal, navigate to your project directory and run:

bash
npm start


This will start a development server, and your SPA will be 
accessible at http://localhost:3000.

**Step 5: Add Routing (Optional)**

If your SPA needs multiple views or pages, you can use 
React Router. Install it by running:

bash
npm install react-router-dom


 Then, configure your routes in your App.js and create additional 
components for each route.

**Step 6: Styling**

You can style your SPA using CSS, a CSS preprocessor like Sass, 
or a CSS-in-JS solution. You can import your styles into your 
components or use a CSS framework like Bootstrap or Material-UI.

**Step 7: Deployment**

When your SPA is ready, you can deploy it to a web hosting 
service or platform of your choice. You'll typically build 
a production-ready version of your app using npm run build
 and then deploy the contents of the build directory.

This is a basic template and guide to get you started with 
a React-based single-page web application. As your project 
requirements and complexity grow, you can explore more 
advanced topics like state management, API integration, 
and optimization.
`

const multiple = `
Creating a multi-page web application using React involves setting up a routing system to manage different pages or views. Here's a step-by-step guide and a template to help you get started:

1. **Setup**: Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Create a React App**: Use create-react-app to set up a new React project. If you don't have it installed, run:

   bash
   npx create-react-app my-multi-page-app
   cd my-multi-page-app
   

3. **Install React Router**: React Router is a popular library for handling routing in React applications. You can install it by running:

   bash
   npm install react-router-dom
   

4. **Create Components**: For each page or view, 
create a React component. For example, you can create a Home.js,
 About.js, and Contact.js component for a basic multi-page app.

   jsx
   // Home.js
   import React from 'react';

   function Home() {
     return (
       <div>
         <h1>Home Page</h1>
         {/* Add content specific to the home page */}
       </div>
     );
   }

   export default Home;
   

   Repeat this for the other pages: About.js and Contact.js.

5. **Set Up Routing**: Create a new file App.js or modify 
the existing one to set up routing using React Router:

   jsx
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Home from './Home';
   import About from './About';
   import Contact from './Contact';

   function App() {
     return (
       <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
         </Switch>
       </Router>
     );
   }

   export default App;
   

6. **Navigation Links**: Create a navigation bar (header) 
in a separate component and include links to navigate between 
the pages.

   jsx
   // Navbar.js
   import React from 'react';
   import { Link } from 'react-router-dom';

   function Navbar() {
     return (
       <nav>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
         </ul>
       </nav>
     );
   }

   export default Navbar;
   

   Include this Navbar component in your App.js to display it on all pages.

7. **Page Navigation**: Now, you can navigate between pages using 
the links in your navigation bar. Each link corresponds to a specific 
route, and when clicked, the content of the corresponding component 
will be displayed.

8. **Styling and Further Customization**: Style your components with 
CSS or use a CSS-in-JS solution like styled-components. You can also 
add more features and components as per your application's 
requirements.

9. **Build and Run**: To build your application, run:

   bash
   npm run build
   

   To start the development server, use:

   bash
   npm start
   

This is a basic template and guide to create a multi-page web application 
using React. You can expand and customize it further to meet your 
specific project needs, such as handling more complex routing 
scenarios, adding data fetching, and integrating additional libraries
 and components.
`

const animated = `
Creating an animated web application involves several steps, 
and it can be a complex task. Below, I'll provide you with a 
basic animated web application template using React, along with 
some guidance on how to get started.

**Step 1: Set Up Your Environment**

Make sure you have Node.js and npm (Node Package Manager) 
installed on your computer. You can download them from the 
official website: https://nodejs.org/

Create a new React application using Create React App. Open 
your terminal and run:

bash
npx create-react-app animated-web-app


**Step 2: Project Structure**

Once your project is set up, your project directory should 
look something like this:


animated-web-app/
  ├── src/
  │   ├── components/
  │   │   ├── Header.js
  │   │   ├── MainContent.js
  │   │   ├── Footer.js
  │   ├── App.js
  │   ├── App.css
  │   ├── index.js
  │   └── index.css
  ├── package.json
  ├── package-lock.json
  └── public/
      ├── index.html
      ├── manifest.json


**Step 3: Create Components**

In your src/components directory, create the necessary components 
for your web application. For example:

- Header.js: This component includes the header of your application.
- MainContent.js: This component is the main content area where you 
can add your animated elements.
- Footer.js: This component includes the footer of your application.

You can use popular animation libraries like react-spring or 
framer-motion to add animations to your components. 
For example, using react-spring:

jsx
// MainContent.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function MainContent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      {/* Your animated content goes here */}
    </animated.div>
  );
}

export default MainContent;


**Step 4: Add Routing**

If your web application has multiple pages, consider adding routing. 
You can use the react-router-dom library to set up routing in your app.

**Step 5: Styling**

Use CSS or a CSS-in-JS library like styled-components to style your
 components. You can also leverage libraries like Material-UI or 
 Bootstrap for pre-built UI components.

**Step 6: Implement Functionality**

Add the necessary functionality to your components. This may include 
user interactions, fetching data from an API, or handling user input.

**Step 7: Test and Optimize**

Thoroughly test your application to ensure that animations and 
functionality work as expected. Optimize your code and assets 
for performance.

**Step 8: Deployment**

When your animated web application is ready, you can deploy it 
to a hosting service like Vercel, Netlify, or GitHub Pages.

This is a basic template and guideline for creating an animated
 web application using React. Depending on your project's complexity,
  you may need to add more features, libraries, and optimize your 
  code for production. Additionally, explore the documentation of 
  animation libraries like react-spring or framer-motion to 
  implement more advanced animations.
` 

module.exports = {animated,ecommerce,static,Dynamic,defaults,single,multiple}