const express = require('express');
const postController = require('../controller/postController');
const authController = require('../controller/authController');
const commentRouter = require('./commentRoute');

const router = express.Router();

//router.param('id', postController.checkID);

router.use('/:postid/comments', commentRouter);
router
  .route('/top-5-suggested')
  .get(postController.aliasTopPost, postController.getAllPosts);

router
  .route('/')
  .get(postController.getAllPosts)
  .post(
    authController.protection,
    authController.restricted('admin', 'moderator'),
    postController.addPublisher,
    postController.addPost
  );
router.route('/post-stats').get(postController.getPostStatus);

router
  .route('/:id')
  .get(postController.getPostByID)
  .patch(
    authController.protection,
    authController.restricted('admin', 'moderator'),
    postController.updatePost
  )
  .delete(
    authController.protection,
    authController.restricted('admin', 'moderator'),
    postController.deletePost
  );

// router
//   .route('/:postid/comments')
//   .post(
//     authController.protection,
//     authController.restricted('user'),
//     commentController.addComment
//   );
module.exports = router;
