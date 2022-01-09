const router=require('express').Router();
const apikeyMiddleware=require('../middleware/index');

//router.use(apikeyMiddleware)//This is applicable for the entire route and when we are using rember to remove form specific route the apikeyMiddleware
//same want to use gloabbly just use the same method in server.js file
router.get('/',(req,res)=>{
    res.render('index',{'title':'My Home Page'})
})
router.get('/about',(req,res)=>{
    res.render('about',{'title':'My About Page'})
})
//the is only specific to the is route only want to use gloablly remove it from the route and then follow line no 4
//mutiple middlw are can be passed bt have to passed in array
//3 party middle ware like cookie parser
router.get('/api/products',apikeyMiddleware,(req,res)=>{
    res.json(
        [
            {
        id:'1',
        name:'chrome',
    },
    {
        id:'2',
        name:'Safari',
    }
])
})
module.exports=router;