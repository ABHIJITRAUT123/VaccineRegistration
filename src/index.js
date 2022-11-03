const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h2>Vaccine Registration Home Page</h2>
            <button>Sign Up</button>
            <span>
              <button>Log In</button>
            </span>`);
});

app.listen(8080);
