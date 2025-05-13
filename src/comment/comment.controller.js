import Comment from '../comment/comment.model.js'
import Post from '../post/post.model.js'

export const addCommentary = async (req, res) => {
    try {
        
        const { postId } = req.params

        const data = req.body
        const comment = new Comment({
            ...data, 
            post: postId 
        })

        const post = await Post.findById(postId)
        if (!post) return res.status(403).send({ success: false, message: 'Post not found' })

        await comment.save()

        return res.send({ success: true, message: 'Comment added successfully' })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error saving the comment', error })
    }
}

export const updateCommentary = async(req, res)=>{
    try {
        const {id} = req.body
        const newdata = req.body

        const updatedComment = await Comment.findById(id)

        if(newdata.post) return res.status(403).send({message : 'You cannot change the post in a commentary'})
        
        const data = await Comment.findByIdAndUpdate(id, newdata, {new : true})

        if(!data) return res.status(404).send({success : false, message : 'Commentary not found'})
            return res.send({success: true, message: 'Commentary updated successfully', data})

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error updating commentary', error })
    }
}

export const deleteCommentary = async (req, res) => {
    try {
    
        const { id } = req.body

        const comment = await Comment.findById(id)
        if (!comment) return res.status(404).send({ success: false, message: 'Commentary not found' })
        
        await Comment.findByIdAndDelete(id)

        return res.send({ success: true, message: 'Commentary deleted successfully' })

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error deleting commentary', error })
    }
}

export const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params 
        const comments = await Comment.find({ post: postId }) 

        if (comments.length === 0) return res.status(404).send({ success: false, message: 'No comments found for this post' })

        return res.send({ success: true, comments }) 

    } catch (error) {
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error getting comments', error })
    }
}