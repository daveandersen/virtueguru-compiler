import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import codes from './routes/codes.js';

const app = express();

const PORT = 5500

app.use(express.json())
app.use(express.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

console.log(`Server running in ${PORT}`);

app.use('/codes', codes);

app.get('/', (req,res) => {
    res.send({message: `Connected to server!`});
    console.log("Connected to server");
})


mongoose.connect('mongodb://localhost:27017/virtueguruCompiler', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);