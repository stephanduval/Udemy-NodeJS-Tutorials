const express = require("express");

const app = express();

app.post("/profile", (req, res) => {
  const user = {
    name: "Sally",
    hobby: "Soccer",
  };

  res.send(user);
});

app.listen(3000);
