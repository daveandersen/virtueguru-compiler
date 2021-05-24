import mongoose from 'mongoose';

const codeSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    }
})

const Codes = mongoose.model('Codes', codeSchema);
export default Codes;