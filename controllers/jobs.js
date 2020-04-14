const Job = require('../models/job');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

async function deleteOne(req,res) {
    const deleteJob = await Job.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteJob);
};

async function update(req, res) {
    console.log(req.body)
    const updateJob = await Job.findByIdAndUpdate(req.body.id, req.body, {new: true});
    console.log(updateJob);
    res.status(200).json(updateJob);
};

async function show(req, res) {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
};

async function create(req, res) {
    req.body.user = req.user._id
    const job = await Job.create(req.body);
    res.status(201).json(job);
};

async function index(req, res) {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
};