const express = require("express");
const app = express();
const port = process.env.port || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))