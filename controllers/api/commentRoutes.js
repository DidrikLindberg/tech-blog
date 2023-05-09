const router = require('express').Router();
const{Comment, Post} = require('../../models');
const withAuth = require('../../utils/auth')

// router.post('/', withAuth, async (req,res) => {
//     if(req.session.logged_in){
//     try{
      
//         const commentData = await Comment.create({
//            comment: req.body.comment, 
//            user_id : req.session.user_id, 
//            post_id: req.body.post_id})
//         res.status(200).json(commentData)
//     }catch(err){
//         res.status(400).json(err)
//     }
// }
// })
router.post('/', withAuth, async (req,res) => {
    if(req.session.logged_in){
    try{
      
        const commentData = await Comment.create({
           comment: req.body.comment, 
           user_id : req.session.user_id, 
           post_id: req.body.post_id})
           
        // res.status(200).json(commentData)
        res.redirect('/'); // Redirect to home page
    }catch(err){
        res.status(400).json(err)
    }
}
})


  // get all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: Post }], 
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});




module.exports = router 