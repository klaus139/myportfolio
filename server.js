require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require("./route/contactRoute")

const app = express();


//creating a server
app.use(express.json())
app.use(cors());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/public"))
    app.get("*", (req, res) => 
        res.sendFile(path.resolve(__dirname, "client", "public", "index.html"))
    );
};
app.use("/api", contactRoute)
const port = process.env.PORT || 3001
app.listen(port, console.log(`server listening on port ${port}`))