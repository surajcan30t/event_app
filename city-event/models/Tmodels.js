import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        require:ture,
    },
});

const Task = mongoose.model("Task",taskSchema)

export default Task;