const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    bio: {
        type: String,
    },
},
{
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
    
            return ret
        }
    }
}
);
 
module.exports = mongoose.model("User", schema);