import Course from './course.model.js'
import Post from '../post/post.model.js'


export const addCourse = async(req, res)=>{
    try{
        let data = req.body
        let course = new Course(data)

        await course.save()
        return res.send({succes : true, message: 'Course added successfully'})

    }catch(error){
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error saving course', error})
    }
}


export const allCourses = async (req, res) => {
    try {

        const courses = await Course.find()
        return res.send({ success: true, message: 'Courses retrieved successfully', courses })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General Error', error })
    }
}



export const updateCourse = async (req, res) => {
    try {
        const { id } = req.body
        const { name } = req.body

        const updateCourse = await Course.findByIdAndUpdate(id, { name }, { new: true });

        if (!updateCourse) return res.status(404).send({ success: false, message: 'Course not found' })
        
        return res.send({ success: true, message: 'Course updated successfully', course: updateCourse })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General Error', error })
    }
}


export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.body

        const courseDeleted = await Course.findById(id)
        console.log(courseDeleted.name)
        if (!courseDeleted) return res.status(404).send({ success: false, message: 'Course not found' })
        
            
        if (courseDeleted.name === process.env.COURSE_NAME) return res.status(403).send({ success: false, message: 'You cannot delete the Default course' })

        const defaultCourse = await Course.findOne({ name: process.env.COURSE_NAME })
        if (!defaultCourse) return res.status(500).send({ success: false, message: 'Default course not found. Cannot reassign posts.' })

        await Post.updateMany(
            { course: id },
            { course: defaultCourse._id }
        )

        await Course.findByIdAndDelete(id);

        return res.send({ success: true, message: 'Course deleted successfully. Posts reassigned to default course.' })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error deleting course', error })
    }
}