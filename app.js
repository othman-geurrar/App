
const express = require('express');
const app = express();
app.use(express.json())
const productRouter = require('./Routes/product');
const log = require('./Middlewear/middlewear')



app.use("/products",productRouter)


const port =3000;









app.listen(port ,()=>console.log(`server created in port ${port}`));




