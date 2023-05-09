const router = require('express').Router();
const withAuth = require('../../utils/auth');
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

  //get post by id 
  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

    // Get all posts by current user
router.get('/my-posts', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const { title, body } = req.body;
    const user_id = req.session.user_id; // assuming user_id is stored in session

    const postData = await Post.create({
      title,
      body,
      user_id
    });

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
  