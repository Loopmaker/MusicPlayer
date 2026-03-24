import moongoose from 'mongoose';
const userSchema = new moongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
}, {    timestamps: true,
});
export const User = moongoose.model("User", userSchema);