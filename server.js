const express = require("express");
const mongoose = require ("mongoose");
// instance of express
const app = express ();
// PORT for the server to run on
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//setup mongoose connection and add mongoose config object to prevent deprecation warnings.
mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/Rose-Trust-For-Women",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
  );
// To get better logs, add
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("mongoose is successfully connected!")
});
// listen for an error 
connection.on("error", (err) => {
    // and if an error occurs, log the error
    console.log("mongoose connection error: ", err)
});
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