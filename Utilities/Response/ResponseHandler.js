module.exports.ResponseHandler = (res,status,code,error,data)=>{
    res.status(code).json({success:status,error,data})
}