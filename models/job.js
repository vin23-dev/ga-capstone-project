const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        // required: true
    },
    positionTitle: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    website: {
        type: String
    },
    datePosted: {
        type: String
    },
    dateApplied: {
        type: String
    },
    estimatedSalary: {
        type: Number
    },
    notes: {
        type: String
    }, 
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);