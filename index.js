const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config(); 

// allows post request to parse json body of the request
app.use(express.json());
// middleware : whitelisting so that request can be made in my computer
app.use(cors()); 

const db = require('./models')

// Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter)
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

// Sync models with database  
db.sequelize.sync().then(() => {
    app.listen(process.env.Port || 3001, () => {
        console.log('Server Running')
    });
});




