import multer from "multer";

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
        cb(null, file.filename+ "-" + Date.now() + ext)
    }
})

store = multer({storage : storage})

export default store