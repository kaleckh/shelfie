require("dotenv").config()
const express = require("express");
const massive = require("massive")

const app = express();
const port = process.env.port || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))