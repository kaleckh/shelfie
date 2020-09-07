require("dotenv").config()
const express = require("express");
const massive = require("massive")
const { getAll } = require("./controller")
const cors = require("cors")
const app = express();
app.use(cors())


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





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))