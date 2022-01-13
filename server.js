const express=require('express');//It return a funct and inside the function we can different methods

const app=express();

const path=require('path');
const ErrorHandler = require('./ErrorHandler/Error');


// Note-All middleare shoudl be declared at top only
const PORT=process.env.PORT || 3000
const mainRoute=require('./routes/index');

const productRoute=require('./routes/productroute');

app.set('view engine','ejs')//It is store in the form of key and vlaue pairs  // console.log('views',app.get('views'));//it will look for ejs files inside the view folder
app.use(express.json())//The middleware for understanding json data
app.use(productRoute)


//app.use(express.urlencoded({'extended':false}))// FOrn nomral form submisssion
app.use(express.static('public')) //1--Static Middleware-whatever static connect we have to kep we can keep in that folder like css images or some stating pages
// app.get('/',(req,res)=>{
//  //res.send('<h1>Welcome to Express Js </h1>')//this is used for sending only some string or tag value

//  //res.sendFile(path.resolve(__dirname)+'/index.html')//sending the html file which reside in root
// //res.sendFile(path.resolve(__dirname)+'/public'+'/index2.html') //sending the html file which reside in public folder
// res.render('index',{'title':'My Home Page'})
// })
// app.get('/about',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname)+'/about.html')
//     res.render('about',{'title':'My About Page'}) //The render method bydefault take the view path we just need to import the file name .
//     //It take 2 parameter the file name and other 1 is object and whatever we specify in the object is avalibale to the particaular ejs file
//     //And that isstore in variable
// })
// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname)+'/about.html')//2-use for downlaoding the file directly
// })

app.use(mainRoute)
// app.use((req,res,next)=>{
// res.json({'error':'No Data'})
// })
//Error handling Middleware
app.use((err,req,res,next)=>{
    //it will check whether the err is cpoming belong to object or not
    if(err instanceof ErrorHandler)
    {
res.json({
    error:{
        message:err.msg,
        status:err.status,
    }
})
    }
    else{
        res.status(500).json({
            error:{
                message:err.msg,
                status:err.status,
            }
        })
    }
    console.log(err.message);
    next()
})
app.listen(PORT,()=>{
    console.log("server intailized on port",PORT);
})

//Template ENgine-pug,ejs,handlebars