---
title: Building a REST API with Node.js
date: 2023-06-20
description: In this tutorial, we will build a RESTful API using Node.js and Express.
author: Bob Williams
image: '/assets/images/post-04.png'
tags: [Node.js, Express, API, Backend]
---

# Building a REST API with Node.js

In this tutorial, we will build a RESTful API using Node.js and Express. A RESTful API is an application programming interface that follows the principles of REST (Representational State Transfer). We will use Express, a Node.js web application framework, to create our API.

## Installing Node.js

First, you need to install Node.js on your system. You can download Node.js from the [official website](https://nodejs.org/).

```bash
npm init -y
npm install express
```

We create an `index.js` file and add the following code:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

To run the application, execute the following command:

```bash
node index.js
```

Now you can access your application at `http://localhost:3000`.

## Creating API Routes

Let's create some routes for our API. For example, a route to get a list of users and another route to get a user by their ID.

```javascript
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, name: 'Alice' });
});
```

Now you can access the users API at `http://localhost:3000/api/users` and `http://localhost:3000/api/users/1`.

## Conclusion

In this tutorial, we have built a RESTful API using Node.js and Express. You can add more routes and functionality to your API as needed. Have fun building your API!

I hope this tutorial has been helpful. If you have any questions, feel free to leave a comment.
