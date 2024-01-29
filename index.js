const express = require('express');
const app = express();
// const logger = require('morgan');
const axios = require('axios')
const cors = require('cors')
require("dotenv").config();

const corsOptions = {
    
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

async function getMovieData(req,res) {
    const fetchedData = await axios.get("http://api.themoviedb.org/3/list/1?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")

    res.json(fetchedData.data)
}

app.get("/api", getMovieData)





app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
});
