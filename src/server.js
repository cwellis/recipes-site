const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000;

const corsOpts = {
    origin: '*',
    methods: [ 'GET', 'POST'],
    allowedHeaders: [ 'Content-Type'],
  };
  
app.use(cors(corsOpts));
app.use(express.json())

app.post("/createrecipe", (req, res) => {
    console.log(req.body)
    // take the response body and save it to mongoDB
})

app.listen(PORT, () => { console.log(`http://localhost:${PORT}`)})