require("dotenv").config()
const express = require("express");
const massive = require("massive")
const { getAll, createProduct } = require("./controller")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())


const { PORT = 3001, CONNECTION_STRING } = process.env;

massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    })
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));


app.get("/api/inventory", getAll)
app.post("/api/product", createProduct)





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))