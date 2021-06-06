import mongoose from "mongoose";

export const Task = mongoose.model("Task", {
    label: String,
    check: Boolean
});
