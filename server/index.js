import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import collegesRoutes from './routes/colleges.js';

const app =express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/', collegesRoutes);
const PORT = process.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/collegeInfo", {useNewUrlParser : true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);