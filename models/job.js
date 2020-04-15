const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
    },
    positionTitle: {
        type: String,
    },
    location: {
        type: String,
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