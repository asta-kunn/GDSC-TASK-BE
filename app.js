const express = require('express')
const allRouter = require("./routes")
const sequelize = require("./config/db")
const app = express()
const port = process.env.PORT || 3002
const cors = require('cors');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

testConnection();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', "DELETE", "PUT"], // Specify the HTTP methods you want to allow
  allowedHeaders: ['Content-Type'] // Specify the allowed headers
}));
app.use(express.json());
app.use(allRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
