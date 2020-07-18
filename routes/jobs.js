const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// add job by POST

router.post('/add', (req, res)=>{

    let {tittle, salary, company, description, email, new_job} = req.body;
});

