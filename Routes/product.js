const router = require('express').Router()
const log = require('../Middlewear/middlewear')
const {addProducts , getProduct} = require('../controller/productController')



router.get('/' ,getProduct );

router.post('/',log ,addProducts);

module.exports = router;