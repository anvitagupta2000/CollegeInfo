import express from 'express';

import {getColleges, searchCollege} from '../controllers/colleges.js';

const router = express.Router();

router.get('/colleges',(req,res) => {
    res.send("This works");
});

export default router;