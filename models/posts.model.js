const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        unique: true,
    },
    updatedAt: {
        type: Date,
        unique: true,
    },
    title: {
        type: String,
        unique: true,
        required: true,
        minLength: 5,
    },
    text: {
        type: String,
        unique: true,
        required: true,
        minLength: 5,
    },
    author: {
        type: String,
        unique: true,
        required: true,
    },
},
{
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;    
            return ret
        }
    }
}
);
 
module.exports = mongoose.model("Post", postSchema);