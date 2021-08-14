import mongoose from 'mongoose';

const collegesSchema = mongoose.Schema({
    city: String,
    collegeId:  Number,
    collegeName: String,
    country: String,
    founded: Number,
    noOfStudents: Number,
    state: String,
});

const Colleges = mongoose.model('Colleges',collegesSchema);
export default Colleges;

