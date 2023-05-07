const router = require('express').Router();
const { Post, User } = require('../../models');


// get all posts
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //create new post
  router.post('/', async (req, res) => {
    // create a new category
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    }
    catch (err) {
      res.status(400).json(err);
    }
  });
  
  

  router.delete('/:id', async (req, res) => {
    try {
      const PostData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!PostData) {
        res.status(404).json({ message: 'No Posts found with this id!' });
        return;
      }
  
      res.status(200).json(PostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  