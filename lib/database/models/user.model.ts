
import { Document, Schema, model, models } from "mongoose"


// extend document to add fiels like _id
// export interface IImage extends Document {
//     clerkId: string;
//     email: string;
//     username: string;
//     photo: ImageBitmap,
//     firstName?: string,
//     lastName?: string,
//     planId: Number,
//     creditBalance: number

// }

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true,
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    planId: {
        type: Number,
        default: 1

    },
    creditBalance: {
        type: Number,
        default: 10
    }
})

const User = models?.User || model('User', UserSchema)

export default User

