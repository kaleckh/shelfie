require("dotenv").config()
const express = require("express");
const massive = require("massive")
const { getAll } = require("./controller")

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/inventory", getAll)





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))