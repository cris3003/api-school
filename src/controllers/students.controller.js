const Student = require('../models/students.model');



const getAll = async (req, res, next) => {
    try {

        const students = await Student.find();
        res.json(students);
    } catch (error) {
        next(error);
    }
}
const getById = async (req, res, next) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findByIdAndUpdate(studentId, req.body, { new: true });
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const { studentId } = req.params;

        const student = await Student.findByIdAndDelete(studentId);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}