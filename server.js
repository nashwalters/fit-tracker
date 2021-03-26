//Packages required
const express = require("express");
const mongoose = require("mongoose");

//Set up port
const PORT = process.env.PORT || 3000;

//Utilize the express package
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect to mongo with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//listen on defined port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
