import Post from './post.model.js'
import Comment from '../comment/comment.model.js'


export const addPost = async(req, res)=>{
    try{
        const data = req.body

        const post = new Post(data)

        await post.save()
        return res.send({success : true, message: 'Post added successfully', post})

    }catch(error){
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error saving Post', error})
    }
}



export const deletePost = async (req, res) => {
    try {
        
        const { id } = req.body

        const post = await Post.findById(id)
        if (!post) return res.status(404).send({ success: false, message: 'Post not found' })
        
        await Comment.deleteMany({ post: id })

        await Post.findByIdAndDelete(id)

        return res.send({ success: true, message: 'Post and all associated comments deleted successfully' })

    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: 'General error deleting post', error })
    }
};

export const getAllPost = async(req, res)=>{
    try{
        const posts = await Post.find()
            .populate('course', ' name -_id')
        if(posts.length == 0){
            return res.status(404).send({ success: false, message: 'Not Found posts' })
        }
        return res.send({success: true, message: 'Posts found', posts})
    }catch(error){
        console.error(error)
        return res.status(500).send({success: false, message: 'General error getting posts', err})
    }
}