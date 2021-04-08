const express = require("express");
// instance of express
const app = require ("express");
// PORT for the server to run on
const PORT = process.env.PORT || 3000;
// listen on PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});