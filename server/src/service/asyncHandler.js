// FSJS2.0 9th feb-mega project
// asyncHandler is a service like higher order function , that handles exixution failures

const asyncHandler= (fn) => async (req,res,next)=>{
    try{
        await fn(req, res, next)
    }
    catch (error){
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
}


export default asyncHandler