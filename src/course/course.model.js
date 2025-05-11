import { Schema, model } from 'mongoose';

const courseSchema = new Schema(
    
    {
        name: {
            type: String,
            required: [true, 'Course name is required'],
            maxLength: [50, `Course name can't exceed 50 characters`],
            unique: true
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [100, `Course description can't exceed 100 characters`]
        }
    }
)

export default model('Course', courseSchema);