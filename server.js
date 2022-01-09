const express=require('express');//It return a funct and inside the function we can different methods

const app=express();

const path=require('path');


const PORT=process.env.PORT || 3000
const mainRoute=require('./routes/index');
app.set('view engine','ejs')//It is store in the form of key and vlaue pairs  // console.log('views',app.get('views'));//it will look for ejs files inside the view folder

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
app.listen(PORT,()=>{
    console.log("server intailized on port",PORT);
})

//Template ENgine-pug,ejs,handlebars