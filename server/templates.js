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



const static =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Web Development Guide</title>
</head>
<body>
    <br>
    <header>
        <h1>Step-by-Step Guide to Becoming a Static Web Developer</h1>
    </header>
    <br>
    <main>
        <section>
            <h2>Step 1: Set Up Your Development Environment</h2>
            <p>Before you start, make sure you have the necessary tools installed on your computer:</p>
            <ul>
                <li>Text editor or integrated development environment (IDE)</li>
                <li>Web browser for testing</li>
            </ul>
            <p>Example Templates:</p>
            <ul>
                <li><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> (Text Editor)</li>
            </ul>
        </section>

        <section>
            <h2>Step 2: Create a Project Folder</h2>
            <p>Create a folder to organize your project files. Here's a basic structure:</p>
            <pre>
                my-static-website/
                ├── index.html
                ├── styles.css
                └── images/
            </pre>
            <p>Example Template:</p>
            <ul>
                <li><a href="https://github.com/openai/guided-developer/tree/main/static-website" target="_blank">Project Structure on GitHub</a></li>
            </ul>
        </section>

        <section>
            <h2>Step 3: Create HTML Files</h2>
            <p>Create HTML files to structure your web pages. Use a simple template as a starting point:</p>
            <pre>
                <!-- index.html -->
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;link rel="stylesheet" href="styles.css"&gt;
                    &lt;title&gt;My Static Website&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;header&gt;
                        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
                    &lt;/header&gt;
                    &lt;main&gt;
                        &lt;p&gt;This is the homepage of my static website.&lt;/p&gt;
                    &lt;/main&gt;
                &lt;/body&gt;
                &lt;/html&gt;
            </pre>
            <p>Example Templates:</p>
            <ul>
                <li><a href="https://github.com/openai/guided-developer/blob/main/static-website/index.html" target="_blank">Index Page Template</a></li>
                <li><a href="https://github.com/openai/guided-developer/blob/main/static-website/about.html" target="_blank">About Page Template</a></li>
            </ul>
        </section>

        <section>
            <h2>Step 4: Create a CSS File</h2>
            <p>Create a CSS file to style your website. Start with a basic CSS template:</p>
            <pre>
                /* styles.css */
                body {
                    font-family: Arial, sans-serif;
                }

                header {
                    background-color: #333;
                    color: #fff;
                    padding: 10px;
                }

                main {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
            </pre>
            <p>Example Template:</p>
            <ul>
                <li><a href="https://github.com/openai/guided-developer/blob/main/static-website/styles.css" target="_blank">CSS Styles Template</a></li>
            </ul>
        </section>

        <!-- Add more sections for additional steps as needed -->

    </main>
    <footer>
        <p>&copy; 2023 Intelimanage</p>
    </footer>
</body>
</html>
</html>
`

const Dynamic =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Web Developer Guide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        h2 {
            color: #555;
        }

        ol {
            list-style-type: decimal;
        }

        ul {
            list-style-type: disc;
        }

        p {
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <h1>Step-by-Step Guidance for Dynamic Web Developers</h1>

    <h2>Step 1: Learn the Fundamentals</h2>
    <p>Start with the basics of web development, including HTML, CSS, and JavaScript.</p>
    <p>Example: A simple HTML template:</p>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h2>Step 2: CSS Styling</h2>
    <p>Learn CSS to style your web pages and make them visually appealing.</p>
    <p>Example: CSS for styling your web page:</p>
    <pre>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}

p {
    color: #666;
}
    </pre>

    <h2>Step 3: JavaScript Fundamentals</h2>
    <p>Master JavaScript to add interactivity to your web pages.</p>
    <p>Example: A simple JavaScript function:</p>
    <pre>
function greet(name) {
    alert('Hello, ' + name + '!');
}
greet('John');
    </pre>

    <h2>Step 4: Front-End Frameworks</h2>
    <p>Explore front-end frameworks like React or Vue.js for building interactive user interfaces.</p>
    <p>Example: A basic React component:</p>
    <pre>
import React from 'react';

function App() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Hello, React!&lt;/h1&gt;
            &lt;p&gt;This is a React component.&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default App;
    </pre>

    <h2>Step 5: Back-End Development</h2>
    <p>Learn a back-end technology like Node.js or Python to handle server-side operations.</p>
    <p>Example: A simple Node.js server:</p>
    <pre>
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
    </pre>

    <h2>Step 6: Databases</h2>
    <p>Study databases like MySQL, MongoDB, or PostgreSQL for data storage and retrieval.</p>
    <p>Example: A MySQL query to retrieve data:</p>
    <pre>
SELECT * FROM users WHERE username = 'john_doe';
    </pre>

    <h2>Step 7: Full-Stack Development</h2>
    <p>Combine front-end and back-end skills to become a full-stack developer.</p>
    <p>Example: A full-stack web application architecture.</p>

    <h2>Step 8: Version Control</h2>
    <p>Learn version control systems like Git to collaborate on projects and track changes.</p>
    <p>Example: Basic Git commands:</p>
    <pre>
git init
git add .
git commit -m 'Initial commit'
git push origin master
    </pre>

    <h2>Step 9: Hosting and Deployment</h2>
    <p>Understand hosting platforms and deploy your web applications online.</p>
    <p>Example: Deploying a website to a cloud service.</p>

    <h2>Step 10: Continuous Learning</h2>
    <p>Web development is ever-evolving. Keep learning, stay updated, and work on personal projects.</p>

</body>
</html>
`;

const react = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Step-by-Step Guidance for React Web Developer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 {
            color: #007BFF;
        }
        ul {
            list-style: disc;
            margin-left: 20px;
        }
        a {
            color: #007BFF;
        }
    </style>
</head>
<body>
    <h1>Step-by-Step Guidance for React Web Developer</h1>
    
    <h2>Step 1: Set Up Your Development Environment</h2>
    <p>Before you start, ensure you have a development environment set up:</p>
    <ul>
        <li>Install <a href="https://nodejs.org/">Node.js</a> for JavaScript runtime.</li>
        <li>Install a code editor like <a href="https://code.visualstudio.com/">Visual Studio Code</a>.</li>
    </ul>

    <h2>Step 2: Learn JavaScript and ES6</h2>
    <p>React is built with JavaScript, so it's important to have a good understanding of the language. Study ES6 features such as arrow functions, classes, and modules.</p>
    
    <h2>Step 3: Understand the Basics of React</h2>
    <p>React is a JavaScript library for building user interfaces. Learn its core concepts:</p>
    <ul>
        <li>Components</li>
        <li>Props</li>
        <li>State</li>
        <li>Lifecycle methods</li>
    </ul>

    <h2>Step 4: Create Your First React App</h2>
    <p>Use <a href="https://create-react-app.dev/">Create React App</a> to quickly set up a new React project.</p>
    
    <h2>Step 5: Build Your First Component</h2>
    <p>Create a simple React component, for example:</p>
    <pre>
    <code>
import React from 'react';

function App() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Hello, React!&lt;/h1&gt;
        &lt;/div&gt;
    );
}

export default App;
    </code>
    </pre>

    <h2>Step 6: Add Styling with CSS</h2>
    <p>You can add CSS to your React components by either using traditional stylesheets or CSS-in-JS libraries like <a href="https://styled-components.com/">styled-components</a>.</p>

    <h2>Step 7: Learn about State Management</h2>
    <p>Study state management libraries such as <a href="https://redux.js.org/">Redux</a> or React's own <a href="https://reactjs.org/docs/context.html">Context API</a>.</p>

    <h2>Step 8: Explore Routing</h2>
    <p>For multi-page applications, use React Router (<a href="https://reactrouter.com/">React Router</a>) to manage navigation.</p>

    <h2>Step 9: Work with API Integration</h2>
    <p>Learn how to make API requests with libraries like <a href="https://axios-http.com/">Axios</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>.</p>

    <h2>Step 10: Deploy Your React App</h2>
    <p>Choose a hosting service (e.g., <a href="https://www.netlify.com/">Netlify</a>, <a href="https://vercel.com/">Vercel</a>) to deploy your React app.</p>
</body>
</html>
`

const angular = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angular Web Developer Guide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            color: #333;
        }

        ol {
            margin: 20px;
        }

        li {
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1>Step-by-Step Guide for Angular Web Developers</h1>

    <ol>
        <li>
            <h2>Setting Up Angular</h2>
            <p>Start by setting up Angular in your project:</p>
            <pre>
                <code>
                    npm install -g @angular/cli
                    ng new my-angular-app
                    cd my-angular-app
                </code>
            </pre>
        </li>

        <li>
            <h2>Creating Components</h2>
            <p>Create components to structure your application:</p>
            <pre>
                <code>
                    ng generate component my-component
                </code>
            </pre>
        </li>

        <li>
            <h2>Templates and Data Binding</h2>
            <p>Use Angular templates and data binding:</p>
            <pre>
                <code>
                    &lt;h1&gt;{{ title }}&lt;/h1&gt;
                </code>
            </pre>
        </li>

        <li>
            <h2>Routing</h2>
            <p>Set up routing for navigation:</p>
            <pre>
                <code>
                    const routes: Routes = [
                        { path: 'home', component: HomeComponent },
                        { path: 'about', component: AboutComponent },
                    ];
                </code>
            </pre>
        </li>

        <li>
            <h2>Services</h2>
            <p>Create services for data handling:</p>
            <pre>
                <code>
                    ng generate service data
                </code>
            </pre>
        </li>
    </ol>

    <p>These are just the basic steps to get you started with Angular. Explore Angular's official documentation and tutorials for more in-depth information and examples.</p>
</body>
</html>
`

const vue = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Vue.js Web Developer Guide</title>
</head>
<body>
    <h1>Step-by-Step Guide to Becoming a Vue.js Web Developer</h1>
    
    <h2>Step 1: Set Up Your Development Environment</h2>
    <p>Before you start working with Vue.js, make sure to set up your development environment:</p>
    <pre>
        <code>
            &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"&gt;&lt;/script&gt;
        </code>
    </pre>

    <h2>Step 2: Create Your First Vue Instance</h2>
    <p>Create a simple Vue instance and bind it to an HTML element:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                {{ message }}
            &lt;/div&gt;
            
            &lt;script&gt;
                new Vue({
                    el: '#app',
                    data: {
                        message: 'Hello, Vue.js!'
                    }
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 3: Use Vue Directives</h2>
    <p>Vue provides directives to manipulate the DOM and bind data. Here's an example of using the <code>v-bind</code> directive:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                &lt;img v-bind:src="imageUrl"&gt;
            &lt;/div&gt;

            &lt;script&gt;
                new Vue({
                    el: '#app',
                    data: {
                        imageUrl: 'https://example.com/image.jpg'
                    }
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 4: Create Vue Components</h2>
    <p>Vue components allow you to build reusable UI elements. Here's an example:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                &lt;my-component&gt;&lt;/my-component&gt;
            &lt;/div&gt;

            &lt;script&gt;
                Vue.component('my-component', {
                    template: '&lt;div&gt;This is a custom component&lt;/div&gt;'
                });

                new Vue({
                    el: '#app'
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 5: Handle User Input</h2>
    <p>Vue allows you to handle user input easily. Here's an example of using the <code>v-model</code> directive:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                &lt;input v-model="message"&gt;
                &lt;p&gt;You typed: {{ message }}&lt;/p&gt;
            &lt;/div&gt;

            &lt;script&gt;
                new Vue({
                    el: '#app',
                    data: {
                        message: ''
                    }
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 6: Fetch Data from an API</h2>
    <p>Vue can be used to fetch and display data from an API. Here's an example using Axios:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                &lt;ul&gt;
                    &lt;li v-for="post in posts" :key="post.id"&gt;{{ post.title }}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;

            &lt;script&gt;
                new Vue({
                    el: '#app',
                    data: {
                        posts: []
                    },
                    mounted() {
                        axios.get('https://jsonplaceholder.typicode.com/posts')
                            .then(response =&gt; {
                                this.posts = response.data;
                            });
                    }
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 7: Routing with Vue Router</h2>
    <p>For building single-page applications, you can use Vue Router. Here's a basic example:</p>
    <pre>
        <code>
            &lt;div id="app"&gt;
                &lt;router-view&gt;&lt;/router-view&gt;
            &lt;/div&gt;

            &lt;script&gt;
                const Home = { template: '&lt;div&gt;Welcome to the Home Page&lt;/div&gt;' };
                const About = { template: '&lt;div&gt;Learn About Us&lt;/div&gt;' };

                const routes = [
                    { path: '/', component: Home },
                    { path: '/about', component: About }
                ];

                const router = new VueRouter({
                    routes
                });

                new Vue({
                    el: '#app',
                    router
                });
            &lt;/script&gt;
        </code>
    </pre>

    <h2>Step 8: Build and Deploy Your Vue.js App</h2>
    <p>When your Vue.js application is ready, you can build and deploy it to a web server or hosting service.</p>
    
    <h2>Conclusion</h2>
    <p>Congratulations! You've now completed a basic guide to becoming a Vue.js web developer. Continue to explore the Vue.js documentation and build more complex applications as you progress in your development journey.</p>
</body>
</html>
`

const ecomm = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Step-by-Step eCommerce Web Development</title>
</head>
<body>
    <h1>Step-by-Step eCommerce Web Development</h1>

    <h2>Step 1: Project Setup</h2>
    <p>Create a new project folder for your eCommerce website and set up the necessary files and directories.</p>

    <h2>Step 2: Choose a Tech Stack</h2>
    <p>Select the technologies you will use for your project, such as HTML, CSS, JavaScript, and a backend framework like Node.js or Ruby on Rails.</p>

    <h2>Step 3: Design Your Website</h2>
    <p>Create wireframes and design your website's user interface. Use tools like Figma or Adobe XD for design.</p>

    <h2>Step 4: Homepage</h2>
    <p>Create an example template for your eCommerce website's homepage:</p>
    <code><!-- Example homepage HTML template --></code>

    <h2>Step 5: Product Listings</h2>
    <p>Create an example template for product listings:</p>
    <code><!-- Example product listings HTML template --></code>

    <h2>Step 6: Product Details</h2>
    <p>Create an example template for displaying detailed product information:</p>
    <code><!-- Example product details HTML template --></code>

    <h2>Step 7: Shopping Cart</h2>
    <p>Create an example template for the shopping cart page:</p>
    <code><!-- Example shopping cart HTML template --></code>

    <h2>Step 8: User Authentication</h2>
    <p>Implement user registration and login functionality.</p>

    <h2>Step 9: Payment Integration</h2>
    <p>Integrate a payment gateway (e.g., Stripe) for processing payments.</p>

    <h2>Step 10: Backend Development</h2>
    <p>Develop the server-side logic for your eCommerce website.</p>

    <h2>Step 11: Database Setup</h2>
    <p>Set up a database to store product information, user data, and orders.</p>

    <h2>Step 12: Testing</h2>
    <p>Thoroughly test your website, including functionality, responsiveness, and security.</p>

    <h2>Step 13: Deployment</h2>
    <p>Deploy your eCommerce website to a web server or a cloud platform (e.g., AWS, Heroku).</p>

    <h2>Step 14: Marketing and SEO</h2>
    <p>Implement SEO strategies and marketing efforts to attract customers to your website.</p>

    <h2>Step 15: Maintenance</h2>
    <p>Regularly update and maintain your website, fix bugs, and add new features as needed.</p>
</body>
</html>
`

const navbar=`
<h1>1. Clasic Top Navbar</h1>
<nav class="navbar1">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<h1 id='html'>HTML Code</h1>
<p id="htmlcode">
&lt nav class="navbar1" &gt <br>
    &lt ul &gt <br>
        &lt li &gt&lt a href="#" &gtHome&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gtAbout&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gtServices&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gtPortfolio&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gtContact&lt /a &gt&lt /li &gt <br>
    &lt /ul &gt <br>
&lt /nav &gt <br>
</p>
<h1 id='css'>CSS Code</h1>
<p id='csscode'>
.navbar1 {<br>
    background-color: #333;<br>
    padding: 10px;<br>
    width:800px;<br>
    margin:auto;<br>
}<br>

.navbar ul {<br>
    list-style: none;<br>
    padding: 0;<br>
    display: flex;<br>
}<br>

.navbar li {<br>
    margin: 0 20px;<br>
}<br>

.navbar a {<br>
    text-decoration: none;<br>
    color: #fff;<br>
}<br>
</p>

<style>
    .navbar1 {
        background-color: #333;
        padding: 10px;
        width:800px;
        margin:auto;
    }

    .navbar ul {
        list-style: none;
        padding: 0;
        display: flex;
    }

    .navbar li {
        margin: 0 20px;
    }

    .navbar a {
        text-decoration: none;
        color: #fff;
    }
</style>

<h1>2. Transparent Navbar</h1>
<nav class="navbartransparent">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>

<h1 id='html'>HTML Code</h1>
<p id="htmlcode">
&lt nav class="navbar transparent" &gt <br>
    &lt ul &gt <br>
        &lt li &gt &lt a href="#" &gt Home&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt About&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt Services&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt Portfolio&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt Contact&lt /a &gt &lt /li &gt <br>
    &lt /ul &gt <br>
&lt /nav &gt <br>
</p>
<style>
.navbartransparent {
    background-color: transparent;
    width:800px;
    margin:auto;
    border:1px solid blue;
}
.navbartransparent > ul > li > a{
    color:blue;
    text-decoration:none;
}
</style>
<h1 id='css'>CSS Code</h1>
<p id='csscode'>
.navbartransparent { <br>
    background-color: transparent; <br>
    width:800px; <br>
    margin:auto; <br>
    border:1px solid blue; <br>
} <br>
.navbartransparent > ul > li > a{ <br>
    color:blue; <br>
    text-decoration:none; <br>
} <br>
</p>

<h1>3. Centered Navbar</h1>
<nav class="navbarcentered">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<h1 id='html'>HTML Code</h1>
<p id="htmlcode">
&lt nav class="navbarcentered" &gt <br>
     &lt ul &gt <br>
         &lt li &gt &lt a href="#" &gt Home &lt /a &gt &lt /li &gt <br>
         &lt li &gt &lt a href="#" &gt About &lt /a &gt &lt /li &gt <br>
         &lt li &gt &lt a href="#" &gt Services &lt /a &gt &lt /li &gt <br>
         &lt li &gt &lt a href="#" &gt Portfolio &lt /a &gt &lt /li &gt <br>
         &lt li &gt &lt a href="#" &gt Contact &lt /a &gt &lt /li &gt <br>
     &lt /ul &gt <br>
 &lt /nav &gt <br>
</p>
<style>
.navbarcentered {
    width:800px;
    margin:auto;
    justify-content:center;
}

.navbarcentered ul {
    display: inline-block;
}
</style>

<h1 id='css'>CSS Code</h1>
<p id='csscode'>
.navbarcentered {<br>
    text-align: center;<br>
}<br>

.navbarcentered ul {<br>
    display: inline-block;<br>
}<br>
</p>

<h1>4. Dropdown Navbar</h1>
<nav class="navbar mega-menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="dropdown">
            <a href="#">Services</a>
            <div class="dropdown-content">
                <a href="#">Service 1</a>
                <a href="#">Service 2</a>
                <a href="#">Service 3</a>
            </div>
        </li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<style>
.navbar.mega-menu .dropdown {
    position: relative;
}

.navbar.mega-menu .dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.navbar.mega-menu .dropdown:hover .dropdown-content {
    display: block;
}
</style>


<h1 id='html'>HTML Code</h1>
<p id="htmlcode">
&lt nav class="navbar mega-menu" &gt <br>
    &lt ul &gt <br>
        &lt li &gt &lt a href="#" &gt Home&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt About&lt /a &gt &lt /li &gt <br>
        &lt li class="dropdown" &gt <br>
            &lt a href="#" &gt Services&lt /a &gt <br>
            &lt div class="dropdown-content" &gt <br>
                &lt a href="#" &gt Service 1&lt /a &gt <br>
                &lt a href="#" &gt Service 2&lt /a &gt <br>
                &lt a href="#" &gt Service 3&lt /a &gt <br>
            &lt /div &gt <br>
        &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt Portfolio&lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt Contact&lt /a &gt &lt /li &gt <br>
    &lt /ul &gt <br>
&lt /nav &gt <br>
</p>

<h1 id='css'>CSS Code</h1>
<p id='csscode'>
.navbar.mega-menu .dropdown { <br>
    position: relative; <br>
} <br>

.navbar.mega-menu .dropdown .dropdown-content { <br>
    display: none; <br>
    position: absolute; <br>
    background-color: #fff; <br>
    min-width: 160px; <br>
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); <br>
    z-index: 1; <br>
} <br>

.navbar.mega-menu .dropdown:hover .dropdown-content { <br>
    display: block; <br>
} <br>
</p>

<p>Icon-Based Navbar</p>
<nav class="navbar icon-based">
    <ul>
        <li><a href="#"><i class="fas fa-home"></i></a></li>
        <li><a href="#"><i class="fas fa-info-circle"></i></a></li>
        <li><a href="#"><i class="fas fa-cog"></i></a></li>
        <li><a href="#"><i class="fas fa-image"></i></a></li>
        <li><a href="#"><i class="fas fa-envelope"></i></a></li>
    </ul>
</nav>
<style>
.navbar.icon-based a i {
    font-size: 20px;
    margin-right: 5px;
}

</style>
<h1 id='html'>HTML Code</h1>
<p id="htmlcode">&lt nav class="navbar icon-based" &gt <br>
    &lt ul &gt <br>
        &lt li &gt &lt a href="#" &gt &lt i class="fas fa-home" &gt &lt /i &gt &lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt &lt i class="fas fa-info-circle" &gt &lt /i &gt &lt /a &gt &lt /li &gt<br> 
        &lt li &gt &lt a href="#" &gt &lt i class="fas fa-cog" &gt &lt /i &gt &lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt &lt i class="fas fa-image" &gt &lt /i &gt &lt /a &gt &lt /li &gt <br>
        &lt li &gt &lt a href="#" &gt &lt i class="fas fa-envelope" &gt &lt /i &gt &lt /a &gt &lt /li &gt <br>
    &lt /ul &gt 
&lt /nav &gt <br>
</p>






<style>
#htmlcode,#csscode{
    text-align:left;
    margin-left:20%;
}
#html,#css{
    text-decoration:underline;
    color:blue;
    text-align:left;
    margin-left:20%;
}
</style>

`

const footer = `
<footer class="classic-footer">
    <p>&copy; 2023 Your Company Name</p>
</footer>
<h1>code1</h1>
<p id='code'>
&lt footer class="classic-footer" &gt <br>
    &lt p &gt&copy; 2023 Your Company Name&lt /p &gt <br>
&lt /footer &gt <br>
</p>



<footer class="gradient-footer">
    <p>&copy; 2023 Your Company Name</p>
</footer>
<h1>code2</h1>
<p id='code'>
&lt footer class="gradient-footer" &gt  <br>
    &lt p &gt&copy; 2023 Your Company Name&lt /p &gt <br>
&lt /footer &gt <br>
</p>


<footer class="social-media-footer">
    <ul>
        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
    </ul>
</footer>
<h1>code3</h1>
<p id='code'>
&lt footer class="social-media-footer" &gt <br>
    &lt ul &gt <br>
        &lt li &gt&lt a href="#" &gt&lt i class="fab fa-facebook" &gt&lt /i &gt&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gt&lt i class="fab fa-twitter" &gt&lt /i &gt&lt /a &gt&lt /li &gt <br>
        &lt li &gt&lt a href="#" &gt&lt i class="fab fa-instagram" &gt&lt /i &gt&lt /a &gt&lt /li &gt <br>
    &lt /ul &gt <br>
&lt /footer &gt <br>
</p>
<footer class="contact-info-footer">
    <p>Contact Us: support@yourcompany.com</p>
</footer>
<h1>code4</h1>
<p id='code'>
&lt footer class="contact-info-footer" &gt <br>
    &lt p &gtContact Us: support@yourcompany.com&lt /p &gt <br>
&lt /footer &gt <br>
</p>





<style>
.contact-info-footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

.social-media-footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

.social-media-footer ul {
    list-style: none;
    padding: 0;
}

.social-media-footer li {
    display: inline;
    margin: 0 10px;
    font-size: 24px;
}

.gradient-footer {
    background: linear-gradient(135deg, #e66465, #9198e5);
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
</style>
<style>
.classic-footer {
    background-color: lightgray;
    color: black;
    text-align: center;
    padding: 20px 0;
}
#code{
    text-align:left;
    margin-left:20%;
}
</style>
`

const header = `
<h1>Here Some Header Designs</h1>
`

const slider = `
<h1>Here Some Slider Designs</h1>
`


module.exports = {static,header,slider,footer,navbar,Dynamic,react,angular,vue,ecomm}

