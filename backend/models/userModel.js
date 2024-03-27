import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
    },


    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export const User = mongoose.models.users || mongoose.model("users", userSchema);