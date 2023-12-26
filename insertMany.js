import express from 'express'
const app = express()

import connectdb from "./connectdb.js";
import Student from './models/Student.js';

await connectdb()

const studentDoc = new Student({
    name:"Syed Umair Hussain",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const studentDoc1 = new Student({
    name:"Syed Umair Hussain",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const studentDoc2 = new Student({
    name:"Syed Ammar Hussain",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const studentDoc3 = new Student({
    name:"Shahzar Nawaz Khan",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const studentDoc4 = new Student({
    name:"Mahbir Nawaz Khan",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const studentDoc5 = new Student({
    name:"Unknown user",
    age:25,
    fees:75000,
    hobbies:['football','research'],
    isActive:true,
    comments:[{value:'We are learning mongoose',}]

});
const result = await Student.insertMany([studentDoc,studentDoc1,studentDoc2,studentDoc3,studentDoc4,studentDoc5])
console.log('=========================================>',result)

app.listen(3000,()=>console.log('Server running at 3000'))
