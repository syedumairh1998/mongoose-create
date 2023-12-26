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

})
const result = await studentDoc.save()
console.log('=========================================>',result)

app.listen(3000,()=>console.log('Server running at 3000'))
