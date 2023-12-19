const express = require("express");
require("dotenv").config();

const route = require("./routers/client/index.route.js")

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engines", "pug");

app.use(express.static("public"));


// Routers
route(app)


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
