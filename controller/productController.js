
const products= [{"id":1,"name":"iPhone 12 Pro","price":1099.99,"type":"Phone"},
{"id":2,"name":"Samsung Galaxy S21","price":899.99,"type":"Phone"},
{"id":3,"name":"Sony PlayStation 5","price":499.99,"type":"console"},
{"id":4,"name":"MacBook Pro 16","price":2399.99,"type":"laptop"},
{"id":5,"name":"iPhone 14 Pro","price":900,"type":"Phone"},
{"id":6,"name":"iPhone 15 Pro","price":1299.99,"type":"Phone"},
{"id":7,"name":"iPhone 14 Pro","price":7854,"type":"Phone"}];

const addProducts = (req,res)=>{
    const newProduct = req.body
    products.push(newProduct)
    res.send(products)

};

const getProduct = (req,res)=>{
    res.send(products)
}


module.exports = {addProducts , getProduct}