import { Schema, model } from 'mongoose'

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            maxLength: [100, 'Title cannot exceed 100 characters']
        },
        course: {
            type: String,
            enum: ['TECNOLOGIA', 'TALLER', 'PRACTICA'], // Aquí defines los valores posibles para el curso
            required: [true, 'Course is required']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxLength: [100, 'Description exceed 100 characters']
        },
        link:{
            type: String,
            required: [true, 'Link is required']
        },
        datePublication: {
            type: Date,
            required: [true, 'Date is required'],
        }
    }
)

export default model('Post', postSchema)
