const mongoose = require('mongoose')
password = "Capstone@57#"
const encoded = encodeURIComponent(password)
    // const connection = mongoose.connect('mongodb://localhost:27017/fyp_ustaad_app', { useNewUrlParser: true }, (error) => {
const connection = mongoose.connect(`mongodb+srv://hamza:${encoded}@cluster0.g5rzdzb.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connection established')
    }
})

module.exports = connection