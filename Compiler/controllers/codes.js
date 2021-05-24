import mongoose from 'mongoose';
import Code from '../models/codes.js';

export const createCode = async (req,res) => {
    console.log("Request received");
    const {code} = req.body;
    console.log(req.body);
    try {
        const resultObject = {
            code: eval(code)
        }
        const result = await Code.create(resultObject);
        console.log(resultObject);

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const sendResultToCompiler = (resultObject) => {
    console.log("Sending result to compiler")
    
}

export const getAllCodes = async (req,res) => {
    try {
        const codes = await Code.find();

        res.status(200).json(codes);
    } catch (error) {
        res.status(404).json({ Code: error.Code });
    }
}

export const getOneCode = async (req, res) => {
    const id = req.params.id

    try {
        const code = await Code.find({ id: id }, function (err, obj) {
            if (err) console.error("Error has occured!")
        })

        res.status(200).json(code);
    } catch (error) {
        res.status(404).json({ Code: error.Code });
    }
}

export const getCode = async (req, res) => {
    const id = req.params.id

    try {
        const code = await Code.find({ id: id }, function (err, obj) {
            if (err) console.error("Error has occured!")
        })

        res.status(200).json(code);
    } catch (error) {
        res.status(404).json({ Code: error.Code });
    }
}

