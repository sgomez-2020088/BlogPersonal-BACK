import Course from '../src/course/course.model.js';

export const initializeDatabase = async () => {
    try {
        const defaultCourseExists = await Course.findOne({ name: process.env.COURSE_NAME })

        if (!defaultCourseExists) {
            const defaultCourse = new Course({
                name: process.env.COURSE_NAME,
                description: process.env.COURSE_DESCRIPTION, 
            })

            await defaultCourse.save()
            console.log('Default course created succesfully');
        } else {
            console.log('Default course already exist')
        }

        console.log('Initialization succesfully')
    } catch (error) {
        console.error('General Error', error)
    }
}
