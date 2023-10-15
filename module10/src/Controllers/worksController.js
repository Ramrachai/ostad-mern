const Work = require('../models/WorksModel');

// Create a new work (protected route)
const createWork = async (req, res) => {
    try {
        const work = new Work(req.body);
        await work.save();
        res.status(201).json({ message: 'Work created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Work creation failed' });
    }
};

// Get all works
const getWorks = async (req, res) => {
    try {
        const works = await Work.find();
        res.json(works);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch works' });
    }
};

// Get a work by ID
const getWorkById = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id);
        if (!work) {
            return res.status(404).json({ message: 'Work not found' });
        }
        res.json(work);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch work' });
    }
};


// Update a work by ID
const updateWork = async (req, res) => {
    try {
        const updatedWork = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWork) {
            return res.status(404).json({ message: 'Work not found' });
        }
        res.json(updatedWork);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update work' });
    }
};

// Delete a work by ID
const deleteWork = async (req, res) => {
    try {
        const deletedWork = await Work.findByIdAndRemove(req.params.id);
        if (!deletedWork) {
            return res.status(404).json({ message: 'Work not found' });
        }
        res.json({ message: 'Work deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete work' });
    }
};

module.exports = { createWork, getWorks, getWorkById, updateWork, deleteWork };
