const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use(cors())

app.use('/api', require("./Routes/BuyerUsers"));
app.use('/api', require("./Routes/SellerUsers"));
app.use('/api', require("./Routes/RegSellers"));
app.use('/api', require("./Routes/RegSellers"));
app.use('/api', require("./Routes/OrderData"));
app.use('/api', require("./Routes/Createitemsprice"));
app.use('/api', require("./Routes/RecyclePrice"));
app.use('/api', require("./Routes/DonatePrice"));

app.get('/', (req, res) => {
  res.send('Hello World! ---------------')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})