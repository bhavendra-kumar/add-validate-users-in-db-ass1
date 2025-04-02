const express = require('express');
require('dotenv').config();
const { resolve } = require('path');
const route = require("./Routes")

const app = express();
const port = process.env.PORT||3010;

app.use(express.static('static'));
const User = require('./Schema')

const db = async()=>{
  try{
   await mongoose.connect(process.env.MONGO_URL)
   .then(res=>console.log("Connected Successful"))
   .catch(e=>console.log("Error Occured"))
  }
  catch(e){
    console.log("error",e)
  }
}
db();

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use("/abc",route)



app.listen(port, () => {
  console.log(`connected at http://localhost:${port}`);
});



