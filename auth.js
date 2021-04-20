const jwt=require('jsonwebtoken');
const  authenticate = async (req,res,next)=>{
    let token=req.header('Authorization')
    console.log(token)
    if(token!=null){
        await jwt.verify(token,'bhupi',(err,user)=>{
            if(err) res.status(403).send()
            req.user=user
            next()
        })
    }else{
        res.status(401).send()
    }

    
}
module.exports={
    authenticate:authenticate
}