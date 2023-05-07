const { Post } = require('../models');

const postData = [

    {
        title: "testtitle1",
        body: "testbody1",
        author: "testauthor1",
        created_at: "2019-01-01 00:00:00"

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;