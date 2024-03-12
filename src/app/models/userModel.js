import mongoose from 'mongoose'
const userDataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        number: {
            type: Number,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
)

export const userDataModel = mongoose.model('userData', userDataSchema)


