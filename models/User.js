var mongoose = require('mongoose')

module.exports = mongoose.model('User' , {
    Name:{type: String ,
        require: true},
    rno : {type: Number ,
        require: true}
})