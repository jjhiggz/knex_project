const app = require("express")();
require("dotenv").config();

app.get("/", (request, response) => {
  response.send(process.env.SUPER_SECRET);
});

app.listen("9000");
