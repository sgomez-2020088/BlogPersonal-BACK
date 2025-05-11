import Comment from '../comment/comment.model.js'
import Post from '../post/post.model.js'


export const addCommentary = async(req, res)=>{
    try{

        const data = req.body
        const comment = new Comment(data)

        const post = await Post.findOne({ _id : data.post })
        if (!post) return res.status(403).send({ succes : false, message: 'Post not found'})

        await comment.save()
        return res.send({success : true, message: 'Comment added successfully'})

    }catch(error){
        console.error(error)
        return res.status(500).send({ success: false, message: 'General error saving the comment', error})
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