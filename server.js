const app = require('express')();
const port = 3000;
const cors = require('cors');

app.use(cors());

const products = [
    {id : 1, name: 'Mouse', price: 10.99},  
    {id : 2, name: 'Keyboard', price: 20.99},
    {id : 3, name: 'Monitor', price: 30.99},
    {id : 4, name: 'CPU', price: 40.99},
]

app.get('/products', (req, res) => {
    res.json(products);
} );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
