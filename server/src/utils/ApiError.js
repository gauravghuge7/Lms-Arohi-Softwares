
class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        stack="",
        error=[]
    ) 
    {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.success =  false;
        this.error = error;
        

        if(stack) {
            this.stack = stack;
        }

        else {
            Error.captureStackTrace(this, this.constructor);
        }

    } 
}

export default ApiError;