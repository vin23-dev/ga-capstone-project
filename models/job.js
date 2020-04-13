const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    positionTitle: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    datePosted: {
        type: Date
    },
    dateApplied: {
        type: Date
    },
    estimatedSalary: {
        type: Number
    },
    notes: {
        type: String
    }, 
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);