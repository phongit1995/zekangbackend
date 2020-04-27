export const responsHelper = (req,res,error,data,numberOfResult=null)=>{
    if (error){
        return res.json({status:error})
    }
    if(numberOfResult!= null && numberOfResult!= undefined){
        return res.json({
            status:'success',
            data:data,
            numberOfResult:numberOfResult
        })
    }
    else{
        return res.json({
            status:'success',
            data:(data)
        })
    }

}
