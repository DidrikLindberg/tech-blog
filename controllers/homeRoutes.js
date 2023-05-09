const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');



// Prevent non logged in User from viewing the homepage
router.get('/', withAuth, async (req, res) => {

    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['username', 'ASC']],
        });

        const users = userData.map((user) => user.get({ plain: true }));

        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }],
            order: [['created_at', 'DESC']],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            users,
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);


router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/dashboard', withAuth, async (req, res) => {
    try {
    res.render('dashboard', {
    logged_in: req.session.logged_in,
    });
    } catch (err) {
    res.status(500).json(err);
    }
    });


  module.exports = router;
  

  // display all blogposts on homepage
    // display all comments on homepage

    // router.get('/', async (req, res) => {
    //     try {
    //         const dbBlogData = await Blog.findAll({
    //             include: [
    //                 {
    //                     model: Post,
    //                     attributes: ['title', 'body'],
    //                 },
    //             ],
    //         });

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // });


    // // Dashboard route
