const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    action:{
        type: String,
        require: [true, 'The todo text field is required']
    }
})

const Todo = mongoose.model('todo', todoSchema) 
module.exports = Todo