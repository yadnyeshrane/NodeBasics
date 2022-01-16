
let productData=require('../productData')
const router=require('express').Router();

const ErrorHandler=require('../ErrorHandler/Error')
router.get('/product',(req,res)=>{
    res.render('product',{'title':"Product Page"})
})

router.get('/api/product',(req,res)=>{
res.json(productData)
})

router.post('/api/product',(req,res,next)=>{
    const{name,price}=req.body;
    if(!name || !price)
    {   
      next(ErrorHandler.validationError())
       // throw new  Error('All fields are require')
       // return res.status(422).json({'error':'All fields are require'})
    }
    const product={
        name,price,id:new Date().getTime().toString()
    }
    productData.push(product)
    res.json(product)
})

router.delete('/api/product/:productId',(req,res)=>{
    //req.params is used to get the dyanmic data the req.params is object and productId is key
    productData=productData.filter((product)=>req.params.productId!==product.id)
    res.json({status:'ok'})
})

//update Existing
router.put('/api/products/:pid',(req,res)=>{
    
    const{name,price,id}=req.body;
   const objectindex=productData.findIndex((data)=>data.id===req.params.pid)
   console.log(objectindex);
   productData[objectindex].id=id,
   productData[objectindex].name=name,
   productData[objectindex].price=price

    res.json(productData)

})


module.exports=router;