const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const useProducts = require('./router/productRouter');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/products', useProducts);
app.listen(3000, () => { console.log('server run 3000 port') })