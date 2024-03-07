import mongoose from 'mongoose'
const userDataSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
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


