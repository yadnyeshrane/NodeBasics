//Route Based Middle ware
function apiKey(req,res,next)
{
  const api_key="123456";

  console.log('apikey',req.query.api_key)
  if(req.query.api_key===api_key)
  {
next();
  }
  else{
      res.json({
          'message':'Not allowed'
      })
  }
  

}

module.exports=apiKey;