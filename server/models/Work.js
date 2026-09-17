const mongoose = require('mongoose');
const workSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    date: { type: Date, required: true },
    problem: { type: String, required: true },
    specific: { type: String },
    inquiryNo: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Confirmed", "Rejected"], default: "Pending" }
})
module.exports = mongoose.model('Work', workSchema);