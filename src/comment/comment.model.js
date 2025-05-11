import { Schema, model } from 'mongoose'

const commentSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            maxLength: [50, 'Username cannot exceed 50 characters'],
        },
        content: {
            type: String,
            required: [true, 'Comment content is required'],
            maxLength: [500, 'Comment cannot exceed 500 characters'],
            trim: true
        },
        date:{
            type: Date,
            required: [true, 'Date is required'],
            default: Date.now
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: [true, 'Post reference is required']
        }
    }
)

export default model('Comment', commentSchema)