const log = (req,res,next)=>{
    console.log("logiing2")
    next()
}

module.exports = log