//not found
const notfound =(req,res,next) => {
    const error=new Error(`Not Found:${req.oroginalURL}`)
    res.status(404)
    next(error)

}
//error handeler
const errorhndler = (req, res, next) => {
    const statucode=res.statusCode===200?500: res.statusCode

    res.status(statucode)
    res.json({
        message:err?.message,
        stack:err?.stack

    })
}
module.exports={errorhndler,notfound}