# express-mongo-som

Express Mongo Som is a package that simplifies how to and query mongodb documents.

RESTful API to mongodb documents for expressjs applications

## Sample usage

```javascript
const express = require("express");
const api = require("express-mongo-som");
require("dotenv").config();

const db_uri = process.env.MONGODB_URI;

api.connectDB(db_uri);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register RESTful API in your express application

app.listen(8080, () => {
  console.log("Server started on port 3000");
});
```

`you can make a collaborate and add or remove a package components`
