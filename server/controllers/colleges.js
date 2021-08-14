import College from '../models/colleges.js';

export const getColleges = async(req,res) =>{
    try{
        const list = await Colleges.find();
        res.status(200).json(list);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const searchCollege = (req,res) => {
    res.send('College is being searched');
}