const express = require("express");
const mongoose = require ("mongoose");
// instance of express
const app = express ();
// PORT for the server to run on
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//setup mongoose connection 
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/Rose-Trust-For-Women");

// routes
app.get("/api/config", (req, res) => {
    res.json({
        success: true
    });
});
// listen on PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});