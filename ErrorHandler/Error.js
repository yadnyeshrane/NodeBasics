class ErrorHandler{
    constructor(status,msg)
    {
        this.status=status,
        this.msg=msg
    }

    //STatic method becoz we dont need to create object
    static validationError(message="All Fields are require")
    {
        return new ErrorHandler(402,message);
        //creating a object 
    }
    static pageNotFound(message="Page Not Found")
    {
        return new ErrorHandler(404,message);
        //creating a object 
    }
}

module.exports=ErrorHandler