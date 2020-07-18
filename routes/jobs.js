const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// rota de teste
router.get('/test', (req, res) =>{
    res.send('deu certo'); 
});

// add job by POST

router.post('/add', (req, res)=>{

    let {tittle, salary, company, description, email, new_job} = req.body;

    // insert
    Job.create({
        tittle,
        salary,
        description,
        company,
        email,
        new_job
    })
    .them(() => res.redirect('/')
    .catch(err => console.log(err)));
});

module.exports = router