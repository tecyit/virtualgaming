const express = require("express");

const PORT = 4000;

const app = express();

app.use("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
