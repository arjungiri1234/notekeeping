import mongoose from 'mongoose';

//firts we create a schema
// then we create model based  of that schema

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
    type:String,
    required: true,
    },
  },
{ timestamps: true} // createdAt and updatedAt by default 

);

const Note = mongoose.model("Note", noteSchema);

export default Note;