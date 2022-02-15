const express = require('express');
const cors = require('cors');
const getWordsFromNuber = require('./Convert/numbertowords')
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/numbertowords/:number',(req,res)=>{
    const digits = req.params.number;
    if(isNaN(digits)) res.status(400).json("input cannot be processed")

    res.status(200).json({ 'words':getWordsFromNuber.getWordsFromNuber(digits)});
})

app.listen(5000,()=>{
    console.log("listenning")
})