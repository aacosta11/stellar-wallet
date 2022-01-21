const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;

app.use(express.json(),express.urlencoded({extended:true}));
app.use(cors());

require("./routes/api")(app);

app.listen(port,()=>console.log(`server is running on port: ${port}`));