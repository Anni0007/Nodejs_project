const getAlljobs = async (req,res)=>{
    res.send('get all jobs')
}

const getJob = async (req,res)=>{
    res.send('get job')
}

const createJob = async (req,res)=>{
    res.send('create job')
}

const updateJob = async (req,res)=>{
    res.send('create job')
}

const deleteJob = async (req,res)=>{
    res.send('create job')
}

module.exports = {
    getAlljobs, getJob, createJob, updateJob,deleteJob
}